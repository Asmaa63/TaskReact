// src/ComponentThree.js
import React, { useContext } from "react";
import { MyContext } from "./Context";
import ComponentFour from "./ComponentFour";

const ComponentThree = () => {
  const { name, email } = useContext(MyContext); 

  return (
    <div>
      <h2>Component Three</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <ComponentFour/>
    </div>
  );
};

export default ComponentThree;
