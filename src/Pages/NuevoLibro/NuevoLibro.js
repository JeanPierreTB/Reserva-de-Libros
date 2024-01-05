import React, { useEffect, useState } from 'react'
import "./NuevoLibro.css"
import BarrasIzquierda from '../../Components/BarrasIzquierda/BarrasIzquierda'
import Inputs from '../../Components/Inputs/Inputs'
function NuevoLibro() {

   const[info,setinfo]=useState('');
   const[datos,setdatos]=useState({
    ISBN:'',
    autor:'',
    editor:'',
    titulo:'',
    foto:'',
    foto2:'',
    stock:'',
    des:''
   })

   useEffect(()=>{
    fetch('http://localhost:3001/datos-usuario',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
            },
        body:JSON.stringify({correo:localStorage.getItem('correo'),contra:localStorage.getItem('contra')})
    })
        .then(response=>response.json())
        .then(data=>{
            setinfo(data.user);
        })
        .catch(e=>console.error(`Ocurrio un error ${e}`))
   },[]);

  const handleinsert=()=>{
    fetch('http://localhost:3001/insertar-libro',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response=>response.json())
    .then(data=>{
        alert(data.message)
    })
    .catch(e=>console.log(`Ocurrio un error ${e}`))
  }
  return (
    <div className='contenedornuevo'>
        <div className='contenedorbarran'>
            <BarrasIzquierda rol={info.rol}/>
            <div className='contenedorbarraco'>
                <h1>Hola,{info.nombre}</h1>
                <hr/>
                <div className='contenedornuevo2'>
                    <img src="https://www.casadelaliteratura.gob.pe/wp-content/uploads/2022/03/dia-de-las-bibliotecas.jpg" alt="libros"></img>
                    <div className='contenedornuevodesa'>
                        <div className='contenedorbarranuevo'>
                            <p>INSERTAR NUEVO LIBRO</p>
                        </div><br/>
                        
                        <div className='contenedornuevocampos'>
                            <div>
                                <Inputs namel="Titulo" type="text" value={datos.titulo} onchange={(e)=>setdatos({...datos,titulo:e.target.value})}/>
                                <Inputs namel="Autor,autores" type="text" value={datos.autor} onchange={(e)=>setdatos({...datos,autor:e.target.value})}/>
                                <Inputs namel="IBSN" type="text" value={datos.ISBN} onchange={(e)=>setdatos({...datos,ISBN:e.target.value})}/>
                                <Inputs namel="Editor" type="text" value={datos.editor} onchange={(e)=>setdatos({...datos,editor:e.target.value})}/>
                            </div>
                            <div>
                                <Inputs namel="Foto del editor" type="text" value={datos.foto} onchange={(e)=>setdatos({...datos,foto:e.target.value})}/>
                                <Inputs namel="Foto del libro" type="text" value={datos.foto2} onchange={(e)=>setdatos({...datos,foto2:e.target.value})}/>
                                <Inputs namel="Stock" type="number" value={datos.stock} onchange={(e)=>setdatos({...datos,stock:e.target.value})}/>
                                <Inputs namel="Descripcion" type="text" value={datos.des} onchange={(e)=>setdatos({...datos,des:e.target.value})}/><br/>
                                
                            </div>
                            
                        
                        </div>  
                        <button onClick={handleinsert}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NuevoLibro