import React, { useState } from 'react'
import Barras from '../../Components/Barras/Barras'
import BarrasIzquierda from '../../Components/BarrasIzquierda/BarrasIzquierda'
import Inputs from '../../Components/Inputs/Inputs'
import Boton from '../../Components/Boton/Boton'
import "./Perfil.css"

function Perfil() {
  const [opci,setopci]=useState(1);

  const Handleclik=(e)=>{
    setopci(e)
  }
  return (
    <div className='perfil'>
        <Barras/>
        <div className='perfilbarras'>
            <BarrasIzquierda/>
            <div className='perfilcontenido'>
                <h1>Hola,Juliana</h1>
                <hr/>
                <div className='perfilpartes'>
                    <img src="https://www.conclusion.com.ar/wp-content/uploads/2019/09/bibliotecaria.jpg" alt="foto" ></img>
                    <div>
                        <div className='perfilseleccion'>
                            <p onClick={()=>Handleclik(1)} id={opci===1? "color":null}>DATOS PERSONALES</p>
                            <p onClick={()=>Handleclik(2)} id={opci===2? "color":null}>CUENTA</p>
                            <p onClick={()=>Handleclik(3)} id={opci===3? "color":null}>PREFERENCIAS</p>
                        </div>
                        <div>
                            {opci===1 &&(
                                <div>
                                    <Inputs
                                        namel="Nombres"
                                        type="text"/>
                                    <Inputs
                                        namel="Tipo de documentos"
                                        type="text"/>
                                    <Inputs
                                        namel="Apellidos"
                                        type="text"/>
                                    <Inputs
                                        namel="Nro de Documento"
                                        type="text"/>
                                    <Boton nameb="Guardar"/>

                                </div>
                            )}

                            {opci===2 && (
                                <div>
                                    <Inputs
                                        namel="Correo"
                                        type="text"/>
                                    <Inputs
                                        namel="Contraseña"
                                        type="text"/>
                                    <Boton nameb="Guardar"/>
                                </div>
                            )}

                            {opci===3 &&(
                                <div>
                                    <Inputs
                                        namel="Idioma"
                                        type="text"/>
                                    <Inputs
                                        namel="Prefijo"
                                        type="text"/>
                                    <Inputs
                                        namel="Color"
                                        type="color"/>
                                </div>    
                            )}
                        </div>
                    </div>

                    
                    
                    
                </div>
                  
            </div>
        </div>
    </div>
  )
}

export default Perfil