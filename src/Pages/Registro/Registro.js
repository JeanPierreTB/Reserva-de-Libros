import React from 'react'
import Inputs from '../../Components/Inputs/Inputs'
import "./Resgistro.css"
import Boton from '../../Components/Boton/Boton'

function Registro() {
  return (
    <div className='contenedorregistro'>
        <h1>Sistema de reserva de Libros</h1>
        <h2>Registro de usuario</h2>
        <div className='contenedorcolum'>
            <div>
                <p>Datos Personales</p>
                <Inputs namel="Nombres" type="text"/>
                <Inputs namel="Apellidos" type="text"/>
                <Inputs namel="Tipo de documento" type="text"/>
                <Inputs namel="Nro de documento" type="text"/>
            </div>
            <div className='contenedorcolum2'>
                <p>Datos de la cuenta</p>
                <Inputs namel="Correo electronico" type="text"/>
                <Inputs namel="Password" type="password"/>
                <Inputs namel="Ingrese Password nuevamente" type="password"/>
                <div className='contenerebotones'>
                  <Boton nameb="Registrar"/>
                  <Boton nameb="Volver"/>
                </div>
               
            </div>
        </div>       
    </div>
  )
}

export default Registro