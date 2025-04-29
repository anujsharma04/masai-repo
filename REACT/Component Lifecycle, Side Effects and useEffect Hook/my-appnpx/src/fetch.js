import { useState, useEffect } from "react";

export default function Fetch() {
    const [datas, setdatas] = useState([])  // usestate Hooks

    useEffect(() => {
        async function getdata() {

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts') // fetch data from api
                const res = await response.json()  // convert json format
                setdatas(res)  // set data in usestate hook
            } catch (error) {
                console.log(error.massage) // error handling
            }

        }

        getdata() // call function for component mount mount  

    }, []) // dependencey arry is empthy beacause run once and mount

    return (
        <>
            <div>{datas.map((ele, index) => <div key={index}>
                <h2>{ele.title}</h2>
                <h3>userId - {ele.userId}</h3>
                <p>{ele.body}</p>
            </div>)}</div>
        </>
    )
}