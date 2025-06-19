import { useState, useEffect } from "react";

import { Navigate } from "react-router-dom";
import { useauth } from "../authcontext";

export default function Privateroutes({children}){
   
    const {token} = useauth()
    
    
  return(token ? children : <Navigate to="/login"/> )
}