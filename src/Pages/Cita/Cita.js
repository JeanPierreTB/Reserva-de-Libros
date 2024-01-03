import React, { useEffect, useState } from 'react'
import Barras from '../../Components/Barras/Barras'
import BarrasIzquierda from '../../Components/BarrasIzquierda/BarrasIzquierda'
import "./Cita.css"
import Boton from '../../Components/Boton/Boton'
function Cita() {
  const[ibsn,setibsn]=useState(localStorage.getItem('libro'))
  const[libro,setlibro]=useState({})
  const[fecha,setfecha]=useState('')

  useEffect(()=>{
    fetch('http://localhost:3001/buscar-libro',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
            },
        body:JSON.stringify({ISBN:ibsn})
    })
        .then(response=>response.json())
        .then(data=>{
            setlibro(data.libro);
        })
        .catch(e=>console.error(`Ocurrio un error ${e}`))
  },[]);

  const handlereservar=()=>{
    fetch('http://localhost:3001/resevar-libro',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            ISBN:ibsn,
            correo:localStorage.getItem('correo'),
            contra:localStorage.getItem('contra'),
            fecha:fecha})
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        setfecha('')
    })
    .catch(e=>console.error(`Ocurrio un error ${e}`))
  }
  return (
    <div className='contenedorCita1'>
        <Barras/>
        <div className='contenedorCitaBarras'>
            <BarrasIzquierda/>
            <div className='contenedorCitaTitulo'>
                <h1>Citas</h1>
                <hr/>
                <div className='contenedorCitacontenido'>
                    <div className='conteendorcitacontendioin'>
                        <img src={libro.foto} alt={libro.id}></img>
                        <h2>{libro.titulo}</h2>
                        <p>{libro.stock>0? "Disponible":"No disponible"}</p>
                    </div>
                    <div className='contenedorCitacontenido2'>
                        <div className='contenedorcitaimagen'>
                            <img src={libro.foto2} alt={libro.id}></img>
                        </div>
                        
                        <p>{libro.des}

                        </p>
                        <div className='contenedorcitascontendio3'>
                            <p>Edicore</p>
                            <p><b>{libro.editor}</b></p>
                        </div>
                    </div>

                    <div className='contenedorcitascontenido4'>
                        <p>Topicos</p>
                        <div className='contenedrocitascontenido5'>
                            <p>Ingeneria de Software</p>
                            <p>Programacion Web</p>
                        </div>
                        
                    </div>
                    
                </div>

                <div className='contenedorcitaultimo'>
                    <div>
                        <h1>Reservar</h1>
                        <hr/>
                    </div>
                    
                    <label>Ingresa fecha limite</label>
                    <input type='date' value={fecha} onChange={(e)=>setfecha(e.target.value)}></input><br/>
                    <button onClick={handlereservar}>Reservar</button>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Cita