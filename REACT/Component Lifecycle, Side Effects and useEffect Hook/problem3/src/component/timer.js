import { useState, useEffect } from "react";
import Items from "./pagenation";

export default function Timer() {
    const [counter, setcounter] = useState(0);

    useEffect(() => {
        const intervalid = setInterval(() => {
            console.log("anuj")
            setcounter((prew)=> prew+1)
            
        }, 1000);


        return () => {
            clearInterval(intervalid)

        }





    }, [])

    return(
        <div>
            <h1>Timer : {counter}</h1>
            
        </div>
    )


}