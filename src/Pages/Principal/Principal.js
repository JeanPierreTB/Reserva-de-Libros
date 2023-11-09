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
                    <div className='clasesreservas'>
                      <Reservas 
                        des="Clean"
                        foto="https://cdn-icons-png.flaticon.com/512/753/753352.png"
                        titulo="Clean Code:A Handbook of Agile Software Craftsmanship"
                        fecha="18/09/2023  08:00 am"
                      />
                      <Reservas 
                        des="Clean"
                        foto="https://cdn-icons-png.flaticon.com/512/753/753352.png"
                        titulo="Clean Code:A Handbook of Agile Software Craftsmanship"
                        fecha="18/09/2023  08:00 am"
                      />
                    
                    
                    </div>
                    
                </div>
                <div style={{marginTop:'20px'}} className='contenedorreservas'>
                    <h2>Lo mas pedidos</h2>
                    <div className='clasesreservas'>
                      <Reservas 
                        des="Clean"
                        foto="https://cdn-icons-png.flaticon.com/512/753/753352.png"
                        titulo="Clean Code:A Handbook of Agile Software Craftsmanship"
                        fecha="18/09/2023  08:00 am"
                      />
                      <Reservas 
                        des="Clean"
                        foto="https://cdn-icons-png.flaticon.com/512/753/753352.png"
                        titulo="Clean Code:A Handbook of Agile Software Craftsmanship"
                        fecha="18/09/2023  08:00 am"
                      />
                    
                    
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Principal