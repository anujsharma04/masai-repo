import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pagenotfound() {
  const [count, setcount] = useState(5);

  const redirect = useNavigate();

  useEffect(() => {
    let interval;

    if (count !== 0) {
      interval = setInterval(() => {
        setcount(count - 1);
      }, 1000);
    } else {
      redirect("/");
    }

    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <h1>Page Not Found Redirect in {count} Seconds</h1>
    </>
  );
}
