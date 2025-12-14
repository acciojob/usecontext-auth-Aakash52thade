// Toggle.js
import React, { useContext } from "react";
import { AuthContext } from "./Context.js";

const Toggle = () => {
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
          onChange={(e) => setAuth(e.target.checked)}
        />
        I am not a robot
      </label>
    </div>
  );
};

export default Toggle;
