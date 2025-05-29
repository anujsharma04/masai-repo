import { createContext, useState, useRef, useEffect } from "react";
 import './App.css'
import Todolist from "./todolist";
import Todoform from "./todoform";

export const Data = createContext();  // create context 

function App() {
  const inputref = useRef("");
  const [arr, setarr] = useState([]);


  // add todo in array
  const handleadd = () => {
    const inputvalue = inputref.current.value.trim();
    if (inputvalue === "") return;
    setarr((pre) => [...pre, { text: inputvalue }]);
    inputref.current.value = "";
  };


  // delete todo by index number
  const handledelete = (index) => {
    setarr((pre) => pre.filter((_,i)=> i !== index))
  }

  return (
    <>
      <Data.Provider value={{ inputref, handleadd, arr , handledelete}}>
        <Todoform />
        <Todolist />
      </Data.Provider>
    </>
  );
}

export default App;
