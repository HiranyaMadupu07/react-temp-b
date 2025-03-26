import React from 'react';
import {useState,useRef,useEffect} from "react";
export default function App12() {
    const[price,setPrice]=useState(0);
    const prevPrice=useRef(0);
    const priceRef=useRef();
    useEffect(()=>{
        if(prevPrice.current>price){
            priceRef.current.style.color="red";
        }else{
            priceRef.current.style.color="green";
        }
        prevPrice.current=price
    },[price])
  return (
    <div>
        <h1>Changing Price</h1>
        <p>
        <input type="number" onChange={(e)=>setPrice(e.target.value)}
        style={{padding:'12px'}}></input>  
        </p>
        Previous price:{prevPrice.current}
        <h2 ref={priceRef}>Current Price:{price}</h2>
    </div>
  )
}
