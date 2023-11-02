import React from 'react'

import "./Inicio.css"
import Inputs from '../../Components/Inputs/Inputs'
import Boton from '../../Components/Boton/Boton'
function Inicio() {
  return (
    <div className='contenedorinicio'>
        <h1>Sistema de reserva de Libros</h1>
        <Inputs namel="Usuario o correo" type="text"/>
        <Inputs namel="Contraseña" type="password"/>
        <p>Olvide mi contraseña</p>
        <div className='contenedorboton'>
            <Boton nameb="Registro usuario"/>
            <Boton nameb="Ingresar"/>
        </div>    
    </div>
  )
}

export default Inicio