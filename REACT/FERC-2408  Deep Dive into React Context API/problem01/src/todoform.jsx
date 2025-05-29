import {useContext} from "react";
import { Data } from "./App";


export default function Todoform() {

    const text = useContext(Data)
    // console.log(text)
  return (
    <>
      <h1>Todo form</h1>
      <input type="text" ref={text.inputref}/>
      <button onClick={()=>text.handleadd()}>Add</button>
    </>
  );
}
