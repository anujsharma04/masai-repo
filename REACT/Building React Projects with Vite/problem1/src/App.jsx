import { useState, useRef, useEffect } from "react";

import "./App.css";

function App() {
  const text = useRef("");
 

  const btn = () => {
 
    document.body.style.backgroundColor = "lightblue";
    document.getElementById("h1").textContent = text.current.value
    text.current.value = "";
  };

  useEffect(() => {
    text.current.focus();
    console.log(text.current.value);
  }, []);

  return (
    <>
      <div id="div">
        <input type="text" placeholder="Enter Somthing" ref={text} />
        <button onClick={btn}>Submit</button>
      </div>
      <h1 id="h1"></h1>
    </>
  );
}

export default App;
