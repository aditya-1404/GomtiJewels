import React from 'react'
import '../components/home.css'
import Nav from './nav'


function home() {
  return (
    <>
    <Nav/>
    <div className='container-h font-link'>
        <h1 className='head'>Gomti Jewels</h1>
        <h3>The Best jewelry Under One Roof.</h3>
    </div>
    </>
  )
}

export default home