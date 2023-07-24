import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from '../context/authContext'
import axios from 'axios'


function Nav() {
  const logout=async ()=>{
    await axios.get('https://gomti-backend.onrender.com/admin/logout')
    window.location.reload();
  }
  const {login}=useContext(Auth)
  return (
    <div className='font-link'>
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid font">
    <Link class="navbar-brand" to="/"><h1>Gomti Jewels</h1></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{fontSize:"20px"}}>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/shop">Shop</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">ContactUs</Link>
        </li>
      </ul>
      {login?(<li class="nav-item d-flex">
          <Link class="nav-link mx-2 my-2" to="/add">Add Product</Link>
        </li>):<></>}
      {login?(<li class="nav-item d-flex">
          <Link class="nav-link" onClick={logout} to="/">Admin logout</Link>
        </li>):(<li class="nav-item d-flex">
          <Link class="nav-link" to="/login">Admin Login</Link>
        </li>)}
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav