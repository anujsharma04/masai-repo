import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
    </div>
  );
}

export default TimerComponent;
