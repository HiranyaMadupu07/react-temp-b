import React from "react";
import { useEffect, useState } from "react";
export default function App21() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const PATH=process.env.REACT_APP_PATH
  const url = '${PATH}/users';
  useEffect(() => {
    console.log("Component Mounted");
    fetch(url).then((res) => res.json().then((data) => setData(data)));
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  const handleUpdate = () => {
    setCount(count + 1);
    console.log("Component Updated / Reloaded");
  };
  return (
    <div>
      <h3>App21</h3>
      <p>REACT COMPONENT LIFE CYCLE</p>
      <p>It has 3 phases:i,Mounting ii,Updating iii,Unmounting</p>
      <button onClick={handleUpdate}>Update</button>
      <p>{count}</p>
      <hr></hr>
      {data.map((value,index)=>(
        <div key={index}>{value.name}-{value.email}</div>
      ))}
    </div>
  );
}