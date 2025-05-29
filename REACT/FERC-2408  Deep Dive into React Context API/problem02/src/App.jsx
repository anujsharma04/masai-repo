import { useState, useRef } from "react";
import Todoform from "./todoform";
import Todolist from "./todolist";
import './App.css'

function App() {
  const inputref = useRef("");
  const [arr, setarr] = useState([]);

  // set todo in array

  const handleadd = () => {
    const inputvalue = inputref.current.value;
    const id =  new Date().toLocaleTimeString();
   

    if (inputvalue === "") return;
    setarr((pre) => [...pre, { task: inputvalue, id:id }]);
    inputref.current.value = "";
  };

  // delete todos from todo application with id
  const handledelete = (id) => {
    setarr((pre) => pre.filter((todo) => todo.id !== id));
    console.log(index)

  };

 

  return (
    <>
      <Todoform inputref={inputref} handleadd={handleadd} />
      <Todolist arr={arr} handledelete={handledelete}/>
    </>
  );
}

export default App;
