import React from "react";
import "./App10.css";
import { useState, useRef } from "react";
export default function App10() {
    const [run,setRun]=useState(0);
    const [wicket,setWicket]=useState(0);
  const [msg, setMsg] = useState("LET'S BEGIN THE GAME!!..");
  const runRef = useRef();
  const wicketRef = useRef();
  const msgRef = useRef()
  const handleRun = (v) => {
    if(wicket<10){
        setRun(run+v);
        setMsg("WELL DONE!...");
        if(v==1) runRef.current.style.backgroundColor = "silver";
        if(v==4) runRef.current.style.backgroundColor = "teal";
        if(v==6) runRef.current.style.backgroundColor = "blue";
        wicketRef.current.style.transform="scale(1)";
        runRef.current.style.transform="scale(1.1)";
      wicketRef.current.style.backgroundColor = "white";
    }
  };
  const handleWicket = () => {
    wicket<10 && setWicket(wicket+1);
    if(wicket<9){
        setMsg("BETTER LUCK NEXT TYM");
        runRef.current.style.backgroundColor = "white";
      wicketRef.current.style.backgroundColor = "red";
    }else{
        setMsg("GAME OVER !!");
        runRef.current.style.backgroundColor = "white";
      wicketRef.current.style.backgroundColor = "white";
    }
  };
//   useEffect(() => {
//     run>0 && wicket<10 && setMsg("WELL DONE!!");
//   }, [run]);
//   useEffect(() => {
//     if(wicket==10 && wicket>10){
//     setMsg("GAME OVER!!");
//   }else if(wicket<9 && wicket >0){
//     setMsg("BETTER LUCK NEXT TYM!!");
//   }
//   }, [wicket]);
  return (
  <div className="container">
    <h3>CRICKET SCORE BOARD</h3>
    <div className="Row">
      <div className="Box" ref={runRef}>
        <button onClick={()=>handleRun(1)}>1</button>
        <button onClick={()=>handleRun(4)}>4</button>
        <button onClick={()=>handleRun(6)}>6</button>
        <p>{run}</p>
      </div>
      <div className="Box" ref={wicketRef}>
        <button onClick={handleWicket}>Wicket</button>
        <p>{wicket}</p>
      </div>
    </div>
    <hr></hr>
    <div className="Row">
      <div className="Box" ref={msgRef}> {msg}</div>
    </div>
  </div>
  );
}