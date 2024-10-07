import {useState} from "react"

export default function Counter(){
    const [count, setcount] = useState(0);

    const increment = () => {
        setcount(count+1)
    }

    const decrement = () => {
        setcount(count-1)
    }

return <div>
    <h1 id="count" >{count}</h1>
    <button id="btn" onClick={increment}>Increment</button>
    <button id="btn" onClick={decrement}>decrement</button>
</div>


}

