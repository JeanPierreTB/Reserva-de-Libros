import React from 'react';
import "./Inputs.css";

function Inputs({namel,type,value,onchange}) {
  return (
    <div>
        <label>{namel}</label><br/>
        <input type={type} value={value} onChange={onchange}></input>
    </div>
  )
}

export default Inputs