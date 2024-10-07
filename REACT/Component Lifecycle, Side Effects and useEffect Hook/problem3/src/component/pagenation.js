import React, { useEffect, useState } from "react";

export default function Items() {
    const [datas, setdata] = useState([]);
    const [errr, seteror] = useState("");
    const [page, setpage] = useState(1);

    const Nextpage = () => {
        setpage(page + 1)

    }
    const prevpage = () => {
        setpage(page - 1)

    }

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=12`)
                const result = await res.json();
                console.log(result)
                setdata(result)
            } catch (error) {
                seteror('Somthing Going Wrong')
            } finally {
                // DATA IS LOADING
            }
        }



        fetchdata()

    }, [page])





    return (
        <div>
            <p>{errr}</p>
            <div className="items">
                {datas.map((data) => (< Setitem key={data.id} data={data} />))}

            </div>
            <div id="btn">

                <button onClick={prevpage}>preview page</button>
                <button onClick={Nextpage}>Next Page</button>
            </div>
        </div>
    )

}

export function Setitem({ data }) {
    return (
        <div id="item">
            <h2>Id - {data?.id}</h2>
            <h2>Name - {data?.name}</h2>
            <h3>Email - {data?.email}</h3>
            <p>Comments - {data?.body}</p>


        </div>
    );
}

