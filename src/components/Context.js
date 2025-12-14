import React, {createContext, useState} from 'react' 

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(prev => !prev);
    }

  return (
    <AuthContext.Provider value={{checked, toggleChecked}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;