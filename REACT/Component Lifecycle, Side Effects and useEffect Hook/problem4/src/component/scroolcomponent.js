import React, { useState, useEffect } from 'react';

function ScrollComponent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h2>Scroll Y: {scrollY}px</h2>
      <p>Scroll down to see the value change.</p>
    </div>
  );
}

export default ScrollComponent;
