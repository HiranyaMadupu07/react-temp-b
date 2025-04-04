import React from 'react';
import {useState,useMemo} from 'react';
export default function App18() {
    const [num,setNum]=useState(100);
    const [count,setCount]=useState(0);
    const f1=()=>{
        console.log("f1 functuon called");
        let i;
        for(i=0;i<=num**2;i++){}
        return i;
    };
    const result=useMemo(()=>f1(),[num]);//Have memorised result until num is changed
  return (
    <div>
        <h3>App18</h3>
        {result}
        <p><button onClick={()=>setCount(count+1)}>Increase Count!!</button></p>
        {count}
        <p onClick={()=>setNum(num+1)}><button>Increase Num!!</button></p>
        {num}
    </div>
  )
}
