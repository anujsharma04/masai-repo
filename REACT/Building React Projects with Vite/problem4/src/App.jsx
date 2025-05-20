import { useState, useEffect, useRef, act } from "react";
import "./App.css";

function App() {
  const [second, setsecond] = useState(0); // store seconds value, if change every time
  const [minute, setminute] = useState(0); // store minutes value, if change every time
  const [active, setactive] = useState(false);
  const [totaltimes, settotaltimes] = useState(0);
  const [width, setwidth] = useState(100); // set width for progress bar
  const [bColor, setbcolor] = useState(false);

  const inputref = useRef(null);

  console.log("width:", width);

  if (width === Infinity) {
    setwidth(100);
  }

  useEffect(() => {
    const perchantage = (inputref.current.value * 60) / 100;

    settotaltimes(minute * 60 + second); //calculate current totaltimes in seconds

    if (totaltimes > 0) {
      setwidth(Math.floor((totaltimes - inputref.current.value) / perchantage)); // calculate parchantage with use math.floor because we should not get after Decimal
    }
    if (second < 10 && active && minute === 0) {
      setbcolor(true);
    }
  }, [second]); // add dependency second if second change every time then useeffect render every time

  useEffect(() => {
    let interval;

    if (active) {
      //set interval work if active is true
      if (second === 0) {
        setsecond(59); // if second equal to 0 then setsecond 59
      }
      interval = setInterval(() => {
        setsecond((pre) => pre - 1); // start interval with second value and every 1 second to less 1 in second value
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [active]);

  const handalchange = (value) => {
    if (!(value && value >= 0)) {
      inputref.current.value = null; //if input value in number not a number return input ref is nul("")
      return;
    }
  };

  // if when i click start button then input less 1 because second store 59 already and active is true then useeffect render

  const handlestart = () => {
    setminute(inputref.current.value - 1);
    setactive(true);
    setbcolor(false);
  };

  const handlepause = () => {
    setactive(false); // active is false
  };

  const handlereset = () => {
    setsecond(0);
    setminute(0);
    setactive(false);
    setwidth(100);
    inputref.current.value = null;
  };

  if (active) {
    // if active is true
    if (second < 0 && minute > 0) {
      // if second is less than 0 and minute greater than 0 both are true then work it
      setsecond(59);
      setminute((pre) => pre - 1); // if second less than 0 than minute less 1
    }
    if ((second < 0 && minute === 0) || minute < 0) {
      handlereset();
      setbcolor(false);
    }
  }

  return (
    <>
      <div
        id="container"
        style={{ backgroundColor: bColor ? "red" : "lightblue" }}
      >
        <div id="input_box">
          <input
            type="text"
            placeholder="0"
            ref={inputref}
            onChange={(e) => handalchange(e.target.value)}
          />
        </div>
        <div
          style={{
            gap: "5px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button disabled={active} onClick={() => handlestart()}>
            Start
          </button>
          <button disabled={!active} onClick={() => handlepause()}>
            Pause
          </button>
          <button onClick={() => handlereset()}>Reset</button>
        </div>
        <h1
          style={{
            fontSize: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {minute < 10 ? `0${minute}` : minute}:
          {second < 10 ? `0${second}` : second}
        </h1>
        <div
          id="outer"
          style={{
            border: "2px solid",
            height: "30px",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            id="inner"
            style={{
              backgroundColor: "yellow",
              width: `${width}%`,
              height: "100%",
              transition: "width 0.5s linear",
            }}
          ></div>

          {/* Fixed position text */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
            }}
          >
            {Math.floor(width)}%
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
