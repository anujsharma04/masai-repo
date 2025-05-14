import { useEffect, useRef } from "react";
import './App.css'

function App() {
  const inputref1 = useRef(null);
  const inputref2 = useRef(null);
  const inputref3 = useRef(null);
  const inputref4 = useRef(null);
  const inputref5 = useRef(null);
  const inputref6 = useRef(null);
  const sbtn = useRef();

  // create array and all inputref are store in array

  const arr = [
    inputref1,
    inputref2,
    inputref3,
    inputref4,
    inputref5,
    inputref6,
  ];

  // add useEffect with Empthy dependency 

  useEffect(() => {
    inputref1.current.focus(); // render frist time inputref1 is focus
        sbtn.current.disabled = true; // and submit button is desibale frist time mount component
  }, []);

  const handlechange = (index) => (e) => { // add handlechange function when input value is change when render every time
    const valu = e.target.value; // store input value 

    if (valu && !/^[0-9]$/.test(valu)) {   // if value is not number between 0-9 then return input value is Empthy
      e.target.value = "";
      return;
    }
    if (valu && index < arr.length - 1) {  // if value is avalable and length of arr less than index then focus next input box
      arr[index + 1].current.focus();
    }
    if ( //  if all input box are empty then submit button is disable
      inputref6.current.value === "" ||
      inputref1.current.value === "" ||
      inputref2.current.value === "" ||
      inputref3.current.value === "" ||
      inputref4.current.value === "" ||
      inputref5.current.value === ""
    ) {
      sbtn.current.disabled = true;
    }
    if ( // if all input box are not enpty then submit button is enable
      inputref6.current.value != "" &&
      inputref1.current.value != "" &&
      inputref2.current.value != "" &&
      inputref3.current.value != "" &&
      inputref4.current.value != "" &&
      inputref5.current.value != ""
    ) {
      sbtn.current.disabled = false;
    }
  };

  const handlekeydown = (index) => (e) => {  //add onkeydown when click backspace button then focus previous input box
    if (e.key == "Backspace" && !e.target.value && index > 0) {
      arr[index - 1].current.focus();
    }
  };

  return (
    <>
      <div id="main_container">
        <h1>OTP FILLER</h1>
        <div id="container">
          {arr.map((refs, index) => (
            <input
              className="input_box"
              key={index}
              ref={refs}
              type="text"
              placeholder="*"
              maxLength={1}
              onChange={handlechange(index)}
              onKeyDown={handlekeydown(index)}
            />
          ))}
        </div>
        <div id="btn">
          <button ref={sbtn}>Submit OTP</button>
        </div>
      </div>
    </>
  );
}

export default App;
