import React from 'react'
import "./NuevoLibro.css"
import BarrasIzquierda from '../../Components/BarrasIzquierda/BarrasIzquierda'
import Barras from '../../Components/Barras/Barras'
import Inputs from '../../Components/Inputs/Inputs'
function NuevoLibro() {
  return (
    <div className='contenedornuevo'>
        <Barras/>
        <div className='contenedorbarran'>
            <BarrasIzquierda/>
            <div className='contenedorbarraco'>
                <h1>Hola,Juliana</h1>
                <hr/>
                <div className='contenedornuevo2'>
                    <img src="https://www.casadelaliteratura.gob.pe/wp-content/uploads/2022/03/dia-de-las-bibliotecas.jpg" alt="libros"></img>
                    <div className='contenedornuevodesa'>
                        <div className='contenedorbarranuevo'>
                            <p>INSERTAR NUEVO LIBRO</p>
                        </div><br/>
                        
                        <div className='contenedornuevocampos'>
                            <Inputs namel="TITULO" type="text"/>
                            <Inputs namel="Autor,autores" type="text"/>
                            <Inputs namel="IBSN" type="text"/>
                            <Inputs namel="Serie,Tipo" type="text"/><br/>
                            <button>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NuevoLibro