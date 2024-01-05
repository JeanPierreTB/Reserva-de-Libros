import React, { useEffect, useState } from 'react'
import BarrasIzquierda from '../../Components/BarrasIzquierda/BarrasIzquierda'
import "./Principal.css";
import Reservas from '../../Components/Reservas/Reservas';

function Principal() {
  const[nombre,setnombre]=useState('');
  const[datos,setdatos]=useState([]);
  const[datos2,setdatos2]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/datos-usuario',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({correo:localStorage.getItem('correo'),contra:localStorage.getItem('contra')})

    })
      .then(response=>response.json())
      .then(data=>{
        setnombre(data.user.nombre)
      })
      .catch(e=>console.error(`Ocurrio un error ${e}`))
    
    fetch('http://localhost:3001/obtener-reserva',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({correo:localStorage.getItem('correo'),contra:localStorage.getItem('contra')})

    })

      .then(response=>response.json())
      .then(data=>{
          setdatos(data.librosUsuario)
      })
      .catch(e=>console.log(`Ocurrio un error ${e}`))

    fetch('http://localhost:3001/vence-pronto',{
      method:'POST',
      headers:{
        'Content-Type':"application/json",
        },
        body:JSON.stringify({correo:localStorage.getItem('correo'),contra:localStorage.getItem('contra')})

    })
    .then(response=>response.json())
    .then(data=>{
      setdatos2(data.librosVencenPronto)
    })
    .catch(e=>console.log(`Ocurrio un error ${e}`))
    
  },[])
  return (
    
    <div className='contenedorp'>

        <div className='contenedorprincipal'>
            <BarrasIzquierda/>
            <div className='contenedorde'>
                <h1>Bienvenido,{nombre}</h1>
                <hr/>
                <div className='contenedorreservas'>
                    <h2>Ultimas Reservas</h2>
                    <div className='clasesreservas'>
                      {datos?.map(data=>(
                        <Reservas
                          key={data && data.id}
                          des={data && data.ISBN}
                          foto={data && data.foto2}
                          titulo={data && data.titulo}
                          fecha={data && new Date(data.Libro_Usuario.fecha).toLocaleDateString()}
                        
                        />
                      ))}
 
                    </div>
                    
                </div>
                <div style={{marginTop:'20px'}} className='contenedorreservas'>
                    <h2>Libros que vence pronto</h2>
                    <div className='clasesreservas'>
                      {datos2.length===0? (<p>No hay libros que vence pronto</p>):datos2?.map(data=>(
                        <Reservas
                          key={data.id}
                          des={data.ISBN}
                          foto={data.foto2}
                          titulo={data.titulo}
                          fecha={new Date(data.Libro_Usuario.fecha).toLocaleDateString()}
                        />
                      ))}
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Principal