import React from 'react';
import { FaBars, FaUser } from 'react-icons/fa';
import "./Barras.css";

function Barras() {
  return (
    <div className='barrascontenedor'>
        <FaBars style={{fontSize:'30px'}}/>
        <FaUser style={{fontSize:'30px'}}/>
    </div>
  )
}

export default Barras