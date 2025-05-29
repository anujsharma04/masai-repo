import { useContext } from "react";
import { Data } from "./App";

export default function Todolist() {
  const data = useContext(Data);

  return (
    <>
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"10px"}}>
        <h1>Todo list</h1>
        <table style={{margin:"auto" , padding:"10px"}}>
          <tbody>
            {data.arr.map((ele, index) => (
              <tr key={index}>
                <td>{ele.text}</td>
                <td>
                  <button onClick={() => data.handledelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
