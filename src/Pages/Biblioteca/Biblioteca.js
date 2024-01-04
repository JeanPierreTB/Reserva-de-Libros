import React, { useEffect, useState } from 'react'
import "./Biblioteca.css"
import Barras from '../../Components/Barras/Barras'
import BarrasIzquierda from '../../Components/BarrasIzquierda/BarrasIzquierda'
import { FaSearch } from 'react-icons/fa'
import Libros from '../../Components/Libros/Libros'
import { useNavigate } from 'react-router-dom'


function Biblioteca() {
  const navigate=useNavigate();
  const[libros,setlibros]=useState([]);
  const[busqueda,setbusqueda]=useState('');
  const[todo,settodo]=useState([]);
  const[datauser,setdatauser]=useState({});
  const[datos,setdatos]=useState([]);
  const[titulo,setitulo]=useState('');


  useEffect(()=>{
    fetch('http://localhost:3001/obtener-libros')
      .then(response=>response.json())
      .then(data=>{
        console.log(data.libro)
        setlibros(data.libro)
      })
      .catch(e=>console.error(`Ocurrio un error ${e}`))

    fetch('http://localhost:3001/datos-usuario',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({correo:localStorage.getItem('correo'),contra:localStorage.getItem('contra')})
    })

      .then(response=>response.json())
      .then(data=>{
        setdatauser(data.user)
      })
      .catch(e=>console.log(`Ocurrio un error ${e}`))
      fetch('http://localhost:3001/obtener-reserva',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({correo:localStorage.getItem('correo'),contra:localStorage.getItem('contra')})
  
      })
      .then(response=>response.json())
      .then(data=>{
          setdatos(data.librosUsuario)
      })
      .catch(e=>console.log(`Ocurrio un error ${e}`))
  },[])

  const handlesearch=()=>{
    if(busqueda!==''){
      settodo(libros);
      setlibros(libros.filter(libro=>libro.titulo===busqueda));
    }
    else
      setlibros(todo)
  }

  const handleclik=()=>{
    navigate('/nuevolibro')
  }

  const handleentregar=()=>{
    fetch('http://localhost:3001/entregar-producto',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
        },
        body:JSON.stringify({correo:localStorage.getItem('correo'),contra:localStorage.getItem('contra'),titulo:titulo})

    })
      .then(response=>response.json())
      .then(data=>{
        alert(data.message)
      })
      .catch(e=>console.log(`Ocurrio un error ${e}`))
      setdatos(datos.filter(data=>data.titulo!==titulo))
  }
  return (
    <div className='contenedorbiblioteca'>

        <div className='contenedorbb'>
            <BarrasIzquierda/>
            <div className='contenedorbt'>
                <div className='contenedorbd'>
                    <h1>Biblioteca</h1>
                    {datauser.rol===0? (<button onClick={handleclik}>Agregar libro</button>):
                    (<div className='contendorseleccion'>
                      <select value={titulo} onChange={(e)=>setitulo(e.target.value)}>
                        {datos.map(data=>(
                          <option key={data.id}>{data.titulo}</option>
                    ))}
                      </select>
                    <button onClick={handleentregar}>Entregar</button>
                    </div>)}
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