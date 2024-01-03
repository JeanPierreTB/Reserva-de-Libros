import React, { useState } from 'react'

import "./Inicio.css"
import Inputs from '../../Components/Inputs/Inputs'
import Boton from '../../Components/Boton/Boton'
import { useNavigate } from 'react-router-dom'
function Inicio() {
  const navigate=useNavigate();

  const [datos,setdatos]=useState({
    correo:'',
    contra:''
  })

  const handleclik=()=>{
    console.log(datos);
    fetch("http://localhost:3001/verificar-usuario",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
        },
        body:JSON.stringify(datos)
    })
      .then(response=>response.json())
      .then(data=>{
        if(data.success){
          alert("Bienvenido")
          localStorage.setItem('correo',datos.correo)
          localStorage.setItem('contra',datos.contra)
          navigate("/principal")
        }
        else
          alert('Usuario o contraseña incorrecta')
        
      })
      .catch(e=>console.error(`Ocurrio un error `+e))

      setdatos({
        correo:"",
        contra:""
      })
  }
  return (
    <div className='contenedorinicio'>
        <h1>Sistema de reserva de Libros</h1>
        <Inputs namel="Usuario o correo" type="text" value={datos.correo} onchange={(e)=>setdatos({...datos,correo:e.target.value})}/>
        <Inputs namel="Contraseña" type="password" value={datos.contra} onchange={(e)=>setdatos({...datos,contra:e.target.value})}/>
        <p>Olvide mi contraseña</p>
        <div className='contenedorboton'>
            <Boton nameb="Registro usuario" onclik={()=>navigate("/registro")}/>
            <Boton nameb="Ingresar" onclik={handleclik}/>
        </div>    
    </div>
  )
}

export default Inicio