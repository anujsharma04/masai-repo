import React, { useState, useEffect } from "react";

export default function Item() {
    
    const [datas, setdata] = useState([]);
    const [eror, seteror] = useState("")
    
    useEffect(() => {
        const fetchdata = async () => {
            try {

                const res = await fetch("https://fakestoreapi.com/products");
                const result = await res.json();
                setdata(result)

            } catch (e) {
                console.log(e)
                seteror("somthing went wrong")
                
            } finally{
                // loding is complete
            }
        };
        fetchdata();
    }, [])


    return(
        <div>
            <p>{eror}</p>
            <div className="items">
            {datas.map((data)=>(<Singleitem key={data.id} data = {data} />))}
            </div>
        </div>
    )
}


export function Singleitem({data}){
return(
    <div id="item">
        <h2>{data?.title}</h2>
        <h2>price - {data?.price}</h2>
        <h3>{data?.category}</h3>
        <p>{data?.description}</p>
    </div>
)
}






