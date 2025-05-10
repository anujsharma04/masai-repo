import { useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const url =
    "https://todo-application-d9e41-default-rtdb.firebaseio.com/todos/form.json";
  const nameref = useRef(null);
  const gmailref = useRef(null);
  const passwordref = useRef(null);
  useEffect(() => {
    nameref.current.focus();
  }, []);

  const handelclick = (e) => {
    e.preventDefault();

    const name = nameref.current.value;
    const gmail = gmailref.current.value;
    const password = passwordref.current.value;

    if (name && gmail && password.length >= 6) {
      const setdata = { name: name, email: gmail, password: password };
      axios.post(url, setdata).then(() => {
        alert("thanks for submitting");
        nameref.current.value = "";
        gmailref.current.value = "";
        passwordref.current.value = "";
      });
    } else if (!name && !gmail && !password) {
      alert("please fill all input feilds");
    } else if (!name) {
      nameref.current.focus();
    } else if (!gmail) {
      gmailref.current.focus();
    } else if (password.length <= 6) {
      passwordref.current.focus();
      
    }
  };

  return (
    <>
      <form onSubmit={(e) => handelclick(e)}>
        <h1>Input Form</h1>
        <input ref={nameref} type="text" placeholder="Enter Your Name" />
        <input ref={gmailref} type="text" placeholder="Enter Your Gmail" />
        <input
          ref={passwordref}
          type="text"
          placeholder="Enter Your Password"
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
