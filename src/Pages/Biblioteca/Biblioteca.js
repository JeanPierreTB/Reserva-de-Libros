import React, { useEffect, useState } from 'react'
import "./Biblioteca.css"
import Barras from '../../Components/Barras/Barras'
import BarrasIzquierda from '../../Components/BarrasIzquierda/BarrasIzquierda'
import { FaSearch } from 'react-icons/fa'
import Libros from '../../Components/Libros/Libros'

function Biblioteca() {

  const[libros,setlibros]=useState([]);
  const[busqueda,setbusqueda]=useState('');
  const[todo,settodo]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/obtener-libros')
      .then(response=>response.json())
      .then(data=>{
        console.log(data.libro)
        setlibros(data.libro)
      })
      .catch(e=>console.error(`Ocurrio un error ${e}`))
  },[])

  const handlesearch=()=>{
    if(busqueda!==''){
      settodo(libros);
      setlibros(libros.filter(libro=>libro.titulo===busqueda));
    }
    else
      setlibros(todo)
  }
  return (
    <div className='contenedorbiblioteca'>
        <Barras/>
        <div className='contenedorbb'>
            <BarrasIzquierda/>
            <div className='contenedorbt'>
                <div className='contenedorbd'>
                    <h1>Biblioteca</h1>
                    <button>Añadir un nuevo recurso</button>  
                </div>   
                <hr/>
                <div className='contenedorbusqueda'>
                    <input type="text" placeholder='Ingresa la palabra clave' value={busqueda} onChange={(e)=>setbusqueda(e.target.value)}></input>
                    <FaSearch className='busqueda' onClick={handlesearch}/>
                </div><br/>
                <div className='contenedorllibros'>
                  {libros.map(libro=>(
                    
                      <Libros 
                        foto={libro.foto}
                        desfoto={libro.id}
                        titulo={libro.titulo}
                        fotol={libro.foto2}
                        desl={libro.id}
                        ibsn={libro.ISBN}
                        autor={libro.autor}
                        editor={libro.editor}
                      />
                    
                  ))}
                  
                    
                    
                </div>
                
            </div>
            
           
        </div>
    </div>
  )
}

export default Biblioteca