import React from 'react'
import "./Libros.css"

function Libros({foto,desfoto,titulo,fotol,desl,ibsn,autor,editor}) {
  return (
    <div className='contenedorlibros'>
        <div className='barratil'>
            <img src={foto} alt={desfoto}></img>
            <p>{titulo}</p>
        </div>
        <div className='contenedorl2'>
            <img id="libro" src={fotol} alt={desl}></img>
        </div>
        
        <div className='contenedorldatos'>
            <p><b>IBSN:</b>{ibsn}</p>
            <p><b>Autor:</b>{autor}</p>
            <p><b>Editor:</b>{editor}</p>
        </div>
        <button>Reservar</button>
        
    </div>
  )
}

export default Libros