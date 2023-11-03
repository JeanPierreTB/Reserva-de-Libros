import React from 'react'
import "./Reserva.css"

function Caja({foto,des,titulo,fecha}){
    return(
        <div>
            <img alt={des} src={foto}></img>
            <p>{titulo}</p>
            <p>{fecha}</p>

        </div>
    )
}

function Reservas({titulo,foto,des,titulo,fecha}) {


  return (
    <div className='contenedoreservas'>
        <h2>{titulo}</h2>
        <div>
            <Caja/>
            <Caja/>
        </div>
    </div>
  )
}

export default Reservas