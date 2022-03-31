import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext({
    loggedIn: false, api: '', settingToken: () => {}, getToken: () => {}
})


export const AuthContextProvider = (props) => {
    const getToken =   () => localStorage.getItem('Authentication')
    const [loggedIn, setLoggedIn] = useState(false)
    const [token, setToken] = useState('')


    const settingToken = (authToken) => {
        setToken(authToken)

        localStorage.setItem('Authentication', token)

        setLoggedIn(true)
    }

    const api = axios.create({
        baseURL: "http://localhost:3000/api",
      });

      api.interceptors.request.use( async config => {
        const token =  getToken();

        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    })


    return(
        <AuthContext.Provider value={{loggedIn, api, settingToken, getToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext

