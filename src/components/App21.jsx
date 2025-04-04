import React from 'react'
import {useEffect,useState} from 'react';
export default function App21() {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("Component Mounted");
    return()=>{
      console.log("Component Unmounted");
    };
  },[]);

  const handleUpdate=()=>{
    setCount(count+1);
    console.log("Component Updated / Reloaded");
  }
  return (
    <div>
      <h3>App21</h3>
      <p>REACT COMPONENT LIFE CYCLE</p>
      <p>It has 3 phases:i,Mounting ii,Updating iii,Unmounting</p>
      <button onClick={handleUpdate}>Update</button>
      <p>{count}</p>
    </div>
  )
}
