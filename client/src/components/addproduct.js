import React, { useContext, useState } from 'react'
import axios from 'axios';
import Nav from './nav'
import {Auth} from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import './addproduct.css'

function Addproduct() {
  const navigate=useNavigate();
  const {login}=useContext(Auth)
  console.log(login)
  const [id,setid]=useState("")
  const [name,setname]=useState("")
  const [desc,setdesc]=useState("")
  const [img,setimg]=useState("")
    const inputhandleid=(e)=>{
        setid(e.target.value)
    }
    const inputhandlename=(e)=>{
        setname(e.target.value)
    }
    const inputhandledesc=(e)=>{
        setdesc(e.target.value)
    }
    const inputhandleimg=(e)=>{
        setimg(e.target.value)
    }
    const handlesubmit=async (e)=>{
      let formData = new FormData()
      formData.append('id', id)
      formData.append('name', name)
      formData.append('desc', desc)
        
    }


  return (
    <>
    <Nav/>
    <div className='productpage'>
        <h1 className='text-center my-3'>Add Product</h1>
      <form action="hhttps://gomti-jewels-git-main-aditya-1404s-projects.vercel.app/" method="post" enctype="multipart/form-data">
      {/* <form action="https://gomti-backend.onrender.com/" method="post" enctype="multipart/form-data"> */}
    <div className='container11'>
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Product id:</label>
  <input type="text" class="form-control" name="id" value={id} id="formGroupExampleInput" onChange={inputhandleid} placeholder="Enter product id"/>
</div>
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Product Name:</label>
  <input type="text" class="form-control" name="name" value={name} id="formGroupExampleInput" onChange={inputhandlename} placeholder="Enter product name"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Product Description:</label>
  <input type="text" class="form-control" name="desc" value={desc} id="formGroupExampleInput2" onChange={inputhandledesc} placeholder="Enter product description"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Product Image:</label><br></br>
  <input type="file" name="product" />
  <div className='text-center my-2'><input type="submit" onClick={handlesubmit} class="btn btn-dark"/></div>
</div>
</div>
  </form>
  </div>
    </>
  )
}

export default Addproduct
