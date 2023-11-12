import React from 'react'
import Barras from '../../Components/Barras/Barras'
import BarrasIzquierda from '../../Components/BarrasIzquierda/BarrasIzquierda'
import "./Cita.css"
import Boton from '../../Components/Boton/Boton'
function Cita() {
  return (
    <div className='contenedorCita1'>
        <Barras/>
        <div className='contenedorCitaBarras'>
            <BarrasIzquierda/>
            <div className='contenedorCitaTitulo'>
                <h1>Citas</h1>
                <hr/>
                <div className='contenedorCitacontenido'>
                    <div className='conteendorcitacontendioin'>
                        <img src="https://cdn-icons-png.flaticon.com/512/753/753352.png" alt="imagen"></img>
                        <h2>Psychology of computer programming</h2>
                        <p>Disponible</p>
                    </div>
                    <div className='contenedorCitacontenido2'>
                        <div className='contenedorcitaimagen'>
                            <img src="https://mott.pe/noticias/wp-content/uploads/2016/03/9788497592208.jpg" alt="ah"></img>
                        </div>
                        
                        <p>Este libro solo tiene un objetivo principal 
                            provocar el inicio de un nuevo campo de estudio:la
                            programacion informatica como actividad humana o,
                            en pocas palabras,la psicologia de la programacion
                            informatica.Todos los demas objetivos estan subordinados
                            a este.Por ejemplo,he intentado que el libro sea interesante
                            y no tecnico,en la medida de lo posible,para animar el mayor
                            numero posible de personas a leerlo:no solo programadores,sino 
                            gestores de programacion y otras personas relacionadas con la
                            programacion en las muchas formas en que estamos relacionados 
                            con la programacion hoy en dia.Lo que intento conseguir es que
                            lector diga,al terminar el libro:"Si,la programacion no es solo
                            una cuestion de hardware y software.A partir de ahora tendre que
                            que ver las cosas de otra manera"

                        </p>
                        <div className='contenedorcitascontendio3'>
                            <p>Edicore</p>
                            <p><b>Van Nostrand Reinhold Company</b></p>
                        </div>
                    </div>

                    <div className='contenedorcitascontenido4'>
                        <p>Topicos</p>
                        <div className='contenedrocitascontenido5'>
                            <p>Ingeneria de Software</p>
                            <p>Programacion Web</p>
                        </div>
                        
                    </div>
                    
                </div>

                <div className='contenedorcitaultimo'>
                    <div>
                        <h1>Reservar</h1>
                        <hr/>
                    </div>
                    
                    <label>Ingresa fecha limite</label>
                    <input type='date'></input><br/>
                    <button>Reservar</button>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Cita