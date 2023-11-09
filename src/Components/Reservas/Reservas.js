import React from 'react'
import "./Reserva.css"

function Reservas({foto,des,titulo,fecha}){
    return(
        <div className='reserva'>
            <img alt={des} src={foto}></img>
            <div>
                <p id="t">{titulo}</p>
                <p id="f">{fecha}</p> 
            </div>  
            

        </div>
    )
}



export default Reservas