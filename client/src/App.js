import './App.css';
import axios from 'axios';
import Home from './components/home';
import Shop from './components/shop';
import Contact from './components/contact';
import Addproduct from './components/addproduct';
import Login from './components/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from './context/authContext';
import { useEffect,useState } from 'react';

axios.defaults.withCredentials=true;

function App() {
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
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/shop" element={<Shop items={items}/>}></Route>
    <Route path="/contact" element={<Contact  />}></Route>
    <Route path="/add" element={<Addproduct  />}></Route>
    <Route path="/login" element={<Login  />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
