import React from 'react'
import '../components/item.css'


function item(props) {
  const serverBaseURI='http://localhost:5000'
  return (
    <>
    <div className='mx-3 my-3'>
    <div class="card" style={{width: "18rem"}}>
  <img src={`${serverBaseURI}/uploads/${props.item.id}.jpg`} class="card-img-top" alt={props.item.img}/>
  <div class="card-body ">
    <h6 class="card-title">ID:{props.item.id}</h6>
    <h5 class="card-title">{props.item.name}</h5>
    <p class="card-text">{props.item.desc}</p>
    {/* <a href="#" class="btn btn-primary">View</a> */}
    {/* <a href="#" class="btn btn-primary mx-3">ID</a> */}
  </div>
</div></div>
    </>
  )                                                                                                             
}

export default item