import React, { useContext } from "react";
import { AuthContext } from "./Context.js";

// Renamed component from Toggle to Auth as requested by the prompt
const Auth = () => { 
  const { checked, setAuth } = useContext(AuthContext);

  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>

      <p>
        {checked
          ? "You are now authenticated, you can proceed"
          : "You are not authenticated"}
      </p>

      <label htmlFor="auth-checkbox">
        <input
          id="auth-checkbox"
          type="checkbox"
          checked={checked}
          // The handler is correct: it passes the new checkbox state to setAuth
          onChange={(e) => setAuth(e.target.checked)} 
        />
        I am not a robot
      </label>
    </div>
  );
};

// Export the renamed component
export default Auth;