import React from "react";
import { useState, useRef } from "react";
export default function App11() {
  const msgRef=useRef();
  const [color,setColor]=useState();
  const handleColor=()=>{
    msgRef.current.style.color=color;
  }  
  return (
  <div>
    <h3>Changing Color of the text usimg UseRef</h3>
      <p><input
        type="text"
        onChange={(e)=>setColor(e.target.value)}
        placeholder="Enter a color"
        style = {{padding:'12px'}}
      ></input>    
        <button onClick={handleColor}>Submit</button></p>
        <p><h3 ref={msgRef}>LET'S CHANGE COLOR OF ME</h3></p>
  </div>
  );
}