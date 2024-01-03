import React, { useEffect, useState } from 'react'
import Barras from '../../Components/Barras/Barras'
import BarrasIzquierda from '../../Components/BarrasIzquierda/BarrasIzquierda'
import Inputs from '../../Components/Inputs/Inputs'
import Boton from '../../Components/Boton/Boton'
import "./Perfil.css"

function Perfil() {
  const [opci,setopci]=useState(1);
  const [datos,setdatos]=useState({})



  useEffect(()=>{
    console.log(localStorage.getItem('correo'))
    console.log(localStorage.getItem('contra'))
    fetch('http://localhost:3001/datos-usuario',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
            },
        body:JSON.stringify({correo:localStorage.getItem('correo'),contra:localStorage.getItem('contra')})
    })
        .then(response=>response.json())
        .then(data=>{
            setdatos(data.user);
            console.log(data.user);
        })
        .catch(e=>console.error(`Ocurrio un error ${e}`))
  },[]);

  const handleclik1=()=>{
    fetch('http://localhost:3001/actualizar-datos-1',{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(datos)
    })
        .then(response=>response.json())
        .then(data=>{
            console.log(data.user)
            alert("Datos modificados")
        })

        .catch(e=>console.error(`Ocurrio un error ${e}`))
  }

  const handleclik2=()=>{
    fetch('http://localhost:3001/actualizar-datos-2',{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(datos)

    })
        .then(response=>response.json())
        .then(data=>{
            console.log(data.user)
            alert("Datos modificados")
        })
        .catch(e=>console.error(`Ocurrio un error ${e}`))
  }
  return (
    <div className='perfil'>
        <Barras/>
        <div className='perfilbarras'>
            <BarrasIzquierda/>
            <div className='perfilcontenido'>
                <h1>Hola,{datos && datos.nombre}</h1>
                <hr/>
                <div className='perfilpartes'>
                    <img src="https://www.conclusion.com.ar/wp-content/uploads/2019/09/bibliotecaria.jpg" alt="foto" ></img>
                    <div className='perfilnuevo1'>
                        <div className='perfilseleccion'>
                            <p onClick={()=>setopci(1)} id={opci===1? "color":null}>DATOS PERSONALES</p>
                            <p onClick={()=>setopci(2)} id={opci===2? "color":null}>CUENTA</p>
                           
                        </div>
                        <div className='perfilnuevo2'>
                            {opci===1 &&(
                                <div className='contenedorpo'>
                                    <Inputs namel="Nombres" type="text" value={datos && datos.nombre} onchange={(e)=>setdatos({...datos,nombre:e.target.value})}/>
                                    <Inputs namel="Tipo de documentos" type="text" value={datos && datos.tipodocumento} onchange={(e)=>setdatos({...datos,tipodocumento:e.target.value})}/>
                                    <Inputs namel="Apellidos" type="text" value={datos && datos.apellido} onchange={(e)=>setdatos({...datos,apellido:e.target.value})}/>
                                    <Inputs namel="Nro de Documento" type="text" value={datos && datos.ndocumento} onchange={(e)=>setdatos({...datos,ndocumento:e.target.value})}/><br/>
                                    <Boton nameb="Guardar" onclik={handleclik1}/>

                                </div> )}

                            {opci===2 && (
                                <div className='contenedorpo'>
                                    <Inputs namel="Correo" type="text" value={datos && datos.correo} onchange={(e)=>setdatos({...datos,correo:e.target.value})}/>
                                    <Inputs namel="Contraseña" type="text" value={datos && datos.contra} onchange={(e)=>setdatos({...datos,contra:e.target.value})}/><br/>
                                    <Boton nameb="Guardar" onclik={handleclik2}/>
                                </div> )}

                    
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Perfil