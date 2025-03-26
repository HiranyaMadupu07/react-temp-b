import React from "react";
import { useState, useEffect } from "react";
export default function App8() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);
  const handleAdd = () => {
    setAmount([...amount, value]);
  };
  useEffect(() => {
    setTotal(Number(number1) + Number(number2));
  }, [number1]);
  useEffect(() => {
    setTotal(Number(number1) * Number(number2));
  }, [number2]);
  return (
    <div>
      <input
        type="number"
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Enter Number 1"
      ></input><br /><br />
      <input
        type="number"
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Enter Number 2"
      ></input>
      <br /><br />
      Total:{total}
    </div>
  );
}