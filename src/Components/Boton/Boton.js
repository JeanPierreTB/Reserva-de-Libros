import React from 'react';
import "./Boton.css";

function Boton({nameb,onclik}) {
  return (
    <button onClick={onclik}>{nameb}</button>
  )
}

export default Boton