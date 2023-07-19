import React, { useState } from 'react'
import Nav from './nav'
import '../components/shop.css'
import Item from './item'
import './shop.css'
import axios from 'axios'
import { useEffect } from 'react'


function Shop(props) {
  var a=[]
  const [items,setItem]=useState(a);
  const getdata=async ()=>{
    const item=await axios.get('https://gomti-backend.onrender.com/get')
    setItem(item.data)
    // console.log(items)
  }
  useEffect(()=>{
    getdata()
  },[])
  console.log(items)
  return (
      <>
      <Nav/>
      <div className='container itemlist'>
      {items.map((i) => {
        // console.log(i)
        return(<Item item={i}/>)
      })}
      </div>
    </>
  )
}

export default Shop
