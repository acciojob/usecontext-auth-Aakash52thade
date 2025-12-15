import React from "react";
import "./../styles/App.css";
import AuthProvider from "./Context.js";
// Changed import from Toggle to Auth
import Auth from "./Auth.js"; 

const App = () => {
  return (
    <AuthProvider>
      {/* Changed component usage from Toggle to Auth */}
      <Auth /> 
    </AuthProvider>
  );
};

export default App;