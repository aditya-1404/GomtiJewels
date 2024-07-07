import React, { useState } from 'react'
import Nav from './nav'
import '../components/shop.css'
import Item from './item'
import './shop.css'
import axios from 'axios'
import { useEffect } from 'react'


function Shop(props) {
  
  return (
      <>
      <Nav/>
      <div className='container itemlist'>
      {props.items.map((i) => {
        // console.log(i)
        return(<Item item={i}/>)
      })}
      </div>
    </>
  )
}

export default Shop
