// src/ComponentFive.js
import React, { useContext } from "react";
import { MyContext } from "./Context";

const ComponentFive = () => {
  const { profession, country } = useContext(MyContext); 

  return (
    <div>
      <h2>Component Five</h2>
      <p>Profession: {profession}</p>
      <p>Country: {country}</p>
    </div>
  );
};

export default ComponentFive;
