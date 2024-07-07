import React, { useState } from 'react'
import Nav from './nav'
import '../components/login.css'
import { useContext} from 'react'
import {Auth} from '../context/authContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
    const {login}=useContext(Auth)
    const [email,setEmail]=useState("")
    const [pwd,setpwd]=useState("")
    const handlesubmit=async(e)=>{
        e.preventDefault()
        try{
        const cred=await axios.post("https://gomti-backend.onrender.com/admin/login",{email,pwd},{withCredentials:true})
        navigate("/add");
        window.location.reload();
        }catch(err){
          alert("Invalid email or password")
          console.log(err)
        }
        // if(cred) console.log("login")
        // else console.log("failed")
        setEmail("")
        setpwd("")
    }
  return (
    <>
    <Nav/>
    <div className='container fontlogin'>
        <h1 className='mt-4'>Admin login</h1>
        <form onSubmit={handlesubmit}>
        <div className='loginfield'>
        <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label mt-4">Email address</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="Enter email address"/>
        </div>
        <label for="inputPassword5" class="form-label">Password</label>
        <input type="password" value={pwd} onChange={(e)=>setpwd(e.target.value)} id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock"placeholder="Enter password"/>
        <div id="passwordHelpBlock" class="form-text">
    </div>
        </div>
    <button type="submit" class="btn btn-dark my-4">Submit</button>
    </form>
    </div>
    </>
  )
}

export default Login
