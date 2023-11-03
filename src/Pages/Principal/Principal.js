import React from 'react'
import Barras from '../../Components/Barras/Barras'
import BarrasIzquierda from '../../Components/BarrasIzquierda/BarrasIzquierda'
import "./Principal.css";
import Reservas from '../../Components/Reservas/Reservas';

function Principal() {
  return (
    
    <div className='contenedorp'>
        <Barras/>
        <div className='contenedorprincipal'>
            <BarrasIzquierda/>
            <div className='contenedorde'>
                <h1>Bienvenido,Juan!</h1>
                <hr/>
                <div className='contenedorreservas'>
                    <h2>Ultimas Reservas</h2>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Principal