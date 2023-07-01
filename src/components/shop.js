import React from 'react'
import Nav from './nav'
import '../components/shop.css'
import Item from './item'
import './shop.css'
import axios from 'axios'
import { useEffect } from 'react'

var items=[]

const getdata=async ()=>{
  const item=await axios.get('http://localhost:5000/get')
  items=item.data
  // console.log(items)
}
function Shop(props) {
  useEffect(()=>{
    getdata()
  },[])
  return (
      <>
      <Nav/>
      <div className='itemlist'>
      {items.map((i) => {
        // console.log(i)
        return(<Item item={i}/>)
      })}
      </div>
    </>
  )
}

export default Shop