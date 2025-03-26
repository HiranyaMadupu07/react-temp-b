import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function App13() {
  const [page, setPage] = useState();
  const Navigate = useNavigate();
  const showApp = () => {
   Navigate(page);
  };
  return (
    <div>
      <h3>This is App13</h3>
      <select style={{padding:'13px',margin:'10px'}}onChange={(e)=>setPage(e.target.value)}>
      <option value="" >--Select--</option>
        <option value="/app1">App1</option>
        <option value="/app2">App2</option>
        <option value="/app3">App3</option>
        <option value="/app1">App4</option>
        <option value="/app2">App5</option>
        <option value="/app3">App6</option>
        <option value="/app1">App7</option>
        <option value="/app2">App8</option>
        <option value="/app3">App9</option>
        <option value="/app1">App10</option>
        <option value="/app1">App11</option>
        <option value="/app2">App12</option>
        <option value="/app3">App13</option>
      </select>
      <button onClick={showApp}>ShowAppViaButton</button>
      <br></br>
      <Link to="/app10">ShowApp10ViaLink</Link>
    </div>
  );
}