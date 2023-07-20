import axios from "axios";
import { createContext, useContext,useEffect,useState } from "react";

axios.defaults.withCredentials=true;

export const Auth=createContext();

const AuthContext=(props)=>{
    const [login,setlogin]=useState(false)
    async function getLoggedIn() {
        const loggedInRes = await axios.get("https://gomti-backend.onrender.com/admin/loggedin",{withCredentials:true});
        // console.log(loggedInRes.data)
        setlogin(loggedInRes.data);
      }
      useEffect(()=>{
        getLoggedIn()
      },[])
    return (
        <Auth.Provider value={{login,setlogin}}>
            {props.children}
        </Auth.Provider>
    )
}

export default AuthContext
