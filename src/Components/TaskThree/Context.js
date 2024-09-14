import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [value, setValue] = useState({
    name: "Asmaa sharaf",
    age: 22,
    email: "Asmaa@gmail.com",
    profession: "Developer",
    country: "egypt",
  });

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
