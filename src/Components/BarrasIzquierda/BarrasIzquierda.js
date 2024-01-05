import React from 'react';
import "./BarrasIzquierda.css";
import { useNavigate } from 'react-router-dom';

function BarrasIzquierda({ rol=1 }) {
  const navigate = useNavigate();

  return (
    <div className='contenedorbi'>
      {rol === 0 ?
        (
          <>
            <p onClick={() => navigate("/perfil")}>Perfil</p>
            <p onClick={() => navigate("/biblioteca")}>Bibliotecas</p>
            <p onClick={()=>navigate("/")}>Cerrar sesion</p>
          </>
        )
        :
        (
          <>
            <p onClick={() => navigate("/principal")}>Inicio</p>
            <p onClick={() => navigate("/perfil")}>Perfil</p>
            <p onClick={() => navigate("/biblioteca")}>Bibliotecas</p>
            <p onClick={()=>navigate("/")}>Cerrar sesion</p>
          </>
        )
      }
    </div>
  );
}

export default BarrasIzquierda;
