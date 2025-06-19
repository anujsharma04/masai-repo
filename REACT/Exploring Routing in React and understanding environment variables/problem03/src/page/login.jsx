import { useState } from "react";
import axios from "axios";
import { useauth } from "../authcontext";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("eve.holt@reqres.in");
  const [password, setpassword] = useState("cityslicka");
  const { login } = useauth();
  const { token } = useauth();


  const handlelogin = async () => {
    try {
      const res = await axios.post(
        "https://reqres.in/api/login",
        {
          email,
          password,
        },
        {
          headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data.token);
      login(res.data.token);
      alert("login succsful");
     } catch (error) {
      console.log("api error", error);
    }
  };


  return (
    <>
      {token ? (
        <Navigate to="/product" />
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button onClick={() => handlelogin()}>LogIn</button>
        </div>
      )}
    </>
  );
}
