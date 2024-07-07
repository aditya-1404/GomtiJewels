import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from '../context/authContext'
import axios from 'axios'
import "../components/nav.css"

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
    <Link class="navbar-brand gomitem" to="/"><h1>Gomti Jewels</h1></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link litem" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link litem" to="/shop">Shop</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link litem cont" to="/contact">ContactUs</Link>
        </li>
      </ul>
      <ul className='ullogin'>
      {login?(<li class="nav-item d-flex">
          <Link class="nav-link logitem1" to="/add">Add Product</Link>
        </li>):<></>}
      {login?(<li class="nav-item d-flex">
          <Link class="nav-link logitem2" onClick={logout} to="/">Logout</Link>
        </li>):(<li class="nav-item d-flex">
          <Link class="nav-link logitem" to="/login">Admin Login</Link>
        </li>)}</ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
</nav>
    </div>
  )
}

export default Nav