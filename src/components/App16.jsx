import React from 'react'
import { useRef } from "react";
export default function () {
    let numRef = useRef();
    const handleSubmit=()=>{
        let num=numRef.current.value;
        if(num>18){
            alert("Welcome:)");
        }else{
            alert("Not Allowed!!")
        }
    }
    return (
        <div>
            <h3>App16</h3>
            <p><input type="number" ref={numRef}></input>
                <button onClick={handleSubmit} style={{ marginLeft: '5px', height: '30px', width: '50px', padding: '0px' }}>Submit</button></p>
        </div>
    )
}
