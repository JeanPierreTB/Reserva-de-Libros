import React from 'react'
import "./BarrasIzquierda.css";
import { useNavigate } from 'react-router-dom'


function BarrasIzquierda() {
  const navigate=useNavigate();
  return (
    <div className='contenedorbi'>
       <p onClick={()=>navigate("/principal")}>Inicio</p>
       <p onClick={()=>navigate("/perfil")}>Perfil</p>
       <p onClick={()=>navigate("/biblioteca")}>Bibliotecas</p> 
    </div>
  )
}

export default BarrasIzquierda