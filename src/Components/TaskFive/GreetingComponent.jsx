import React, { useState } from "react";
import "./GreetigComponentEx.css"; 

function GreetingComponent() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = () => {
    setMessage("Hello, " + name);
  };

  return (
    <div className="container">
      <h1>{message ? message : "Please enter your name"}</h1>
      <div>
        <label>Enter name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button onClick={handleChange}>Click</button>
    </div>
  );
}

export default GreetingComponent;
