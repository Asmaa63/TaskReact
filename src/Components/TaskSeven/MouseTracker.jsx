import React, { useState, useEffect } from "react";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>
        Mouse Position: X: {mousePosition.x}, Y: {mousePosition.y}
      </h2>
      <button onClick={handleClick}>Click</button>
      <p>Button clicked {clickCount} times</p>
    </div>
  );
};

export default MouseTracker;
