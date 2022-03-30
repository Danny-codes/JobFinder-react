import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext({
    loggedIn: false, api: ''
})

export const AuthContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)


    const api = axios.create({
        baseURL: "http://localhost:3000/api",
      });

    return(
        <AuthContext.Provider value={{loggedIn, api}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext

