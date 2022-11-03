import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
export const Authcontext=createContext();
const ContextProvide = ({children}) => {
 const [auth,setAuth]=useState(true);
const toggleauth=()=>{
    return setAuth(!auth);
}
 return (
    <Authcontext.Provider value={{auth,toggleauth,setAuth}}>{children}</Authcontext.Provider>
  )
}

export default ContextProvide;