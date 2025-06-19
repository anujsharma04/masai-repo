import { createContext, useState, useContext } from "react";

// step 1 create context

const Authcontext = createContext()

// step 2 create provider

export function AuthProvider({children}){
    const [token, settoken] = useState(localStorage.getItem("token"))

    const login = (newtoken) => {
        localStorage.setItem("token", newtoken)
        settoken(newtoken)
    }

    const logout = () => {
        localStorage.removeItem("token")
        settoken(null)
        console.log("abc")
    }

    return(<>
    <Authcontext.Provider value={{token, login, logout}}>
        {children}
    </Authcontext.Provider>
    </>);

}

// step 3 create coustom Hook
export const useauth = () => useContext(Authcontext)