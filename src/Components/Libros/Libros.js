import React from 'react'
import "./Libros.css"
import { useNavigate } from 'react-router-dom'

function Libros({foto,desfoto,titulo,fotol,desl,ibsn,autor,editor,rol=1}) {
  const navigate=useNavigate();

  const handleclik=()=>{
    if(rol===0){
      fetch('http://localhost:3001/eliminar-libro',{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({ISBN:ibsn})
      })
      .then(response=>response.json())
      .then(data=>{
        alert(data.message)
        window.location.reload();
      })
      .catch(e=>console.log(`Ocurrio un error ${e}`))

    }else{
      localStorage.setItem('libro',ibsn);
      navigate("/cita")
    }
    
  }
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
        <button onClick={handleclik}>{rol===0? 'Eliminar':'Reservar'}</button>
        
    </div>
  )
}

export default Libros