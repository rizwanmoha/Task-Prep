
import React, { useState, useEffect } from "react";


const Spinner = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
      <h1 className="Text-center">Loading a content  to you in {count} second </h1>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner



