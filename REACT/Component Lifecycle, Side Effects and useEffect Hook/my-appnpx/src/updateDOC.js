import { useState, useEffect, use } from "react";

export default function Docupdater() {
    const [count, setcount] = useState(0)  

    useEffect(()=>{

        document.title = `click ${count} update` // document title update  
    },[count]) // add count in dependency array because state change then run every time 



    return (<>
        
            <button onClick={()=>setcount(pre => pre + 1)}>Click{count}</button> 
    </>)
}