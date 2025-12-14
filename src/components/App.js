// App.js
import React from "react";
import "./../styles/App.css";
import AuthProvider from "./Context.js";
import Toggle from "./Toggle.js";

const App = () => {
  return (
    <AuthProvider>
      <Toggle />
    </AuthProvider>
  );
};

export default App;
