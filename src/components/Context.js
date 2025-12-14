// Context.js
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // `checked` = whether user passed the mock captcha
  const [checked, setChecked] = useState(false);

  // setAuth accepts a boolean (true/false) and sets the state accordingly.
  // This matches onChange handlers that pass e.target.checked.
  const setAuth = (value) => {
    setChecked(Boolean(value));
  };

  return (
    <AuthContext.Provider value={{ checked, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
