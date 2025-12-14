import React from 'react'
import { useContext } from 'react'
import {AuthContext} from './Context.js';

const Toggle = () => {
    const {checked, toggleChecked} = useContext(AuthContext);
  return (
   <div>

    <h1>Click on the checkbox to get authenticated</h1>
      <p>{checked ? "You are now authenticated, you can proceed" : "you are not authenticated"}</p>

  <label>
    <input 
       type='checkbox'
       checked={checked}
       onChange={(e) => toggleChecked(e.target.checked)}

    />
    Iam not a robot
  </label>
 </div>

  )
}

export default Toggle