import React from 'react';
import "./Inputs.css";

function Inputs({namel,type}) {
  return (
    <div>
        <label>{namel}</label><br/>
        <input type={type}></input>
    </div>
  )
}

export default Inputs