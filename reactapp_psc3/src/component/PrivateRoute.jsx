import React from 'react'
import { useContext } from 'react'
import { Authcontext } from './Context'
import {Navigate} from 'react-router-dom'
// import { Children } from 'react'
import Login from '../pages/Login'

const PrivateRoute = ({children}) => {
    const {auth}=useContext(Authcontext);

    if(!auth){
       return<Navigate to="/login"/>
    }

    
  return children;
}

export default PrivateRoute;