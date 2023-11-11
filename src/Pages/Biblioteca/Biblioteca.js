import React from 'react'
import "./Biblioteca.css"
import Barras from '../../Components/Barras/Barras'
import BarrasIzquierda from '../../Components/BarrasIzquierda/BarrasIzquierda'
import Inputs from '../../Components/Inputs/Inputs'
import { FaSearch } from 'react-icons/fa'
import Libros from '../../Components/Libros/Libros'

function Biblioteca() {
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
                    <input type="text" placeholder='Ingresa la palabra clave'></input>
                    <FaSearch className='busqueda'/>
                </div><br/>
                <div className='contenedorllibros'>
                    <Libros 
                      foto="https://cdn-icons-png.flaticon.com/512/625/625213.png"
                      desfoto="persona"
                      titulo="Psychology of computer programming"
                      fotol="https://mott.pe/noticias/wp-content/uploads/2016/03/9788497592208.jpg"
                      desl="libro"
                      ibsn="0932633420"
                      autor="0932633420"
                      editor="Addison-Wesley"
                    />

                    <Libros 
                      foto="https://cdn-icons-png.flaticon.com/512/625/625213.png"
                      desfoto="persona"
                      titulo="Psychology of computer programming"
                      fotol="https://mott.pe/noticias/wp-content/uploads/2016/03/9788497592208.jpg"
                      desl="libro"
                      ibsn="0932633420"
                      autor="0932633420"
                      editor="Addison-Wesley"
                    />
                    <Libros 
                      foto="https://cdn-icons-png.flaticon.com/512/625/625213.png"
                      desfoto="persona"
                      titulo="Psychology of computer programming"
                      fotol="https://mott.pe/noticias/wp-content/uploads/2016/03/9788497592208.jpg"
                      desl="libro"
                      ibsn="0932633420"
                      autor="0932633420"
                      editor="Addison-Wesley"
                    />
                    
                </div>
                
            </div>
            
           
        </div>
    </div>
  )
}

export default Biblioteca