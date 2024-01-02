import React, { useState } from 'react'
import Inputs from '../../Components/Inputs/Inputs'
import "./Resgistro.css"
import Boton from '../../Components/Boton/Boton'
import { useNavigate } from 'react-router-dom'

function Registro() {
  const navigate=useNavigate();
  const [datospersonales,setdatospersonales]=useState({
    nombre:"",
    apellido: "",
    tipo:"",
    nro:'',
    correo:'',
    contra:'',
    rol:1
  })

  const [repetir,setrepetir]=useState('')
  const handleregister=async ()=>{
    console.log(datospersonales)
    if(repetir===datospersonales.contra)
      await fetch('http://localhost:3001/insertar-usuario',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
            },
          body:JSON.stringify(datospersonales)
    })
      .then(response=>response.json())
      .then(data=>{
        if(data.success)
          alert("Usuario creado");
        else
          alert("No se puedo realizar la operacion")
        
      })
      .catch(e=>console.error(`Ocurrio un error `+e))
    
    else
      alert("Contraseña no coinciden")
   
    
  }
  return (
    <div className='contenedorregistro'>
        <h1>Sistema de reserva de Libros</h1>
        <h2>Registro de usuario</h2>
        <div className='contenedorcolum'>
            <div>
                <p>Datos Personales</p>
                <Inputs namel="Nombres" type="text" value={datospersonales.nombre} onchange={(e)=>setdatospersonales({...datospersonales,nombre:e.target.value})}/>
                <Inputs namel="Apellidos" type="text" value={datospersonales.apellido} onchange={(e)=>setdatospersonales({...datospersonales,apellido:e.target.value})}/>
                <Inputs namel="Tipo de documento" type="text" value={datospersonales.tipo} onchange={(e)=>setdatospersonales({...datospersonales,tipo:e.target.value})}/>
                <Inputs namel="Nro de documento" type="text" value={datospersonales.nro} onchange={(e)=>setdatospersonales({...datospersonales,nro:e.target.value})}/>
            </div>
            <div className='contenedorcolum2'>
                <p>Datos de la cuenta</p>
                <Inputs namel="Correo electronico" type="text" value={datospersonales.correo} onchange={(e)=>setdatospersonales({...datospersonales,correo:e.target.value})}/>
                <Inputs namel="Password" type="password" value={datospersonales.password} onchange={(e)=>setdatospersonales({...datospersonales,contra:e.target.value})}/>
                <Inputs namel="Ingrese Password nuevamente" type="password" value={repetir} onchange={(e)=>setrepetir(e.target.value)}/>
                <div className='contenerebotones'>
                  <Boton nameb="Registrar" onclik={handleregister}/>
                  <Boton nameb="Volver" onclik={()=>navigate('/')}/>
                </div>
               
            </div>
        </div>       
    </div>
  )
}

export default Registro