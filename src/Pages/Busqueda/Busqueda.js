import React from 'react'
import Barras from '../../Components/Barras/Barras'
import BarrasIzquierda from '../../Components/BarrasIzquierda/BarrasIzquierda'
import { FaSearch } from 'react-icons/fa'
import "./Busqueda.css"

function Busqueda() {
  return (
    <div className='contenedorbus1'>
        <Barras/>
        <div className='contenedorbusbarras1'>
            <BarrasIzquierda/>
            <div className='contenedorbustitulo1'>
                <h1>Busqueda</h1>
                <hr/>
                <div className='contenedorcontenido1'>
                    <div className='contenedorbarrasbusqueda'>
                        <div className='contenedorbusquedab'>
                            <input type="text" placeholder='Ingresa la palabra clave'></input>
                            <FaSearch className='busqueda1'/>
                        </div>
                        <div className='contenedorbusquedab'>
                            <input type="text" placeholder='Tipo de recurso'></input>
                            <FaSearch className='busqueda1'/>
                        </div>
                    </div>
                    
                    <div className='contenedorincluir'>
                        <p>Incluir busqueda en</p>
                        <div className='contenedorinputsbus'>
                            <input type='checkbox'></input>
                            <label>Titulo</label>
                        </div>  
                        <div className='contenedorinputsbus'>
                            <input type='checkbox'></input>
                            <label>Autor,autores</label>
                        </div>  
                        <div className='contenedorinputsbus'>
                            <input type='checkbox'></input>
                            <label>Serie</label>
                        </div>  
                        <div className='contenedorinputsbus'>
                            <input type='checkbox'></input>
                            <label>IBSN</label>
                        </div> 

                        <div className='contenedorbusqboton'>
                            <button>Limpiar</button>
                            <button>Buscar</button>
                        </div>


                    </div>

                    


                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default Busqueda