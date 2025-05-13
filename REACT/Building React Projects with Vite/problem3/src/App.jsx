import { useRef, useEffect } from "react";

export default function App() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  // Array of refs for easier management
  const refs = [inputRef1, inputRef2, inputRef3, inputRef4];

  // Focus the first input on mount
  useEffect(() => {
    inputRef1.current.focus();
  }, []);

  // Handle input change and move focus to the next input
  const handleChange = (index) => (e) => {
    const value = e.target.value;
    // Optional: Restrict to digits only
    if (value && !/^[0-9]$/.test(value)) {
      e.target.value = "";
      return;
    }
    // Move to next input if a value is entered and not the last input
    if (value && index < refs.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  // Handle Backspace to move focus to the previous input
  const handleKeyDown = (index) => (e) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      refs[index - 1].current.focus();
    }
  };

  return (
    <> 
    <h1>OTP Fill</h1>
      {refs.map((ref, index) => (
        <input
          key={index}
          ref={ref}
          type="password"
          maxLength={1}
          onChange={handleChange(index)}
          onKeyDown={handleKeyDown(index)}
          style={{ width: "2rem", margin: "0 0.5rem", textAlign: "center" }}
        />
      ))}
    </>
  );
}