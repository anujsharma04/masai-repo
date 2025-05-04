import { useState } from 'react'

import './App.css'

function App() {
  const [inputext, setinputtext] = useState("")   // store input value 
  const [data, setdata] = useState([])  // store data of array

  const btn = () => {
    setdata([...data, inputext]) 
    setinputtext("")
  }
    //  add delete functionlaty 
  const handleclick = (indexToDelete) => {
    const newtodo = data.filter((_, index) => index !== indexToDelete)
    setdata(newtodo)
  }

  console.log(data)

  return (



    <>
      <div id='container'>
        <input type="text" placeholder='Enter Your Task' value={inputext} onChange={(e) => setinputtext(e.target.value)} />
        <button onClick={btn}>Add Task</button>
        <table>
          <tbody>
            {data.map((ele, index) => <tr key={index}>
              <td>
                {ele}

              </td>
              <td>
                <button onClick={() => handleclick(index)}>Delete</button>

              </td>

            </tr>)}
          </tbody>
        </table>

      </div>
    </>
  )
}

export default App
