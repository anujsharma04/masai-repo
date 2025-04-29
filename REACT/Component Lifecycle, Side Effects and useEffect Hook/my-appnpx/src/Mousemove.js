import { useEffect, useState } from "react";

export default function Mousemove() {
    const [mousemove, setmousemove] = useState({ x: 0, y: 0 })  // set useState Hooks in object x position 0  and Y position 0

    useEffect(() => { 
        function handlemousemove(event) {   // receive a props if cursor moves then run function 
            setmousemove({ x: event.clientX, y: event.clientY })  // set mousemove positions in useState 

        }

        window.addEventListener('mousemove', handlemousemove) // add event listner in window,  addEventListener on EventTarget 2 arguments required
        return () => { window.removeEventListener('mousemove', handlemousemove)  // return removeEventListner 
            console.log('mousemove')
        }

    }, []) //  dependency arry is empthy because run once and mount

    return (
        <>
            <h2>MouseMove</h2>
            <p>position X:{mousemove.x}</p>
            <p>position Y:{mousemove.y}</p>
        </>
    )
}