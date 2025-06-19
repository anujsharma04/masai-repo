import axios from "axios";
import { useState, useEffect } from "react";
import { useauth } from "../authcontext";

export default function Product() {
  const [arr, setarr] = useState([]);
  const { logout } = useauth();

  const api = "https://fakestoreapi.com/products";

  useEffect(() => {
    async function getdata() {
      try {
        const res = await axios.get(api);
        setarr(res.data);
      } catch (error) {}
    }

    getdata();
  }, []);

  return (
    <>
      <h1>
        <button onClick={() => logout()}>LOGOUT</button>
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "50px",
          padding: "50px",
        }}
      >
        {arr.map((ele) => (
          <div
            style={{
              width: "100%",
              border: "1px solid",
              borderRadius:"10px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <img style={{ width: "100%" }} src={ele.image} alt="Image" />
            </div>
            <div>
              <h1>₹ {ele.price}</h1>
              <h2>{ele.title}</h2>
              <h3>Category - {ele.category}</h3>
              <ul>
                <li>Rate - {ele.rating.rate}</li>
                <li>Count - {ele.rating.count}</li>
              </ul>
              <p>{ele.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
