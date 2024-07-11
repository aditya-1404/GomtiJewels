import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="icons">
            <a className='icon' href=""><i class="ri-facebook-box-fill"></i></a>
            <a className='icon' href=""><i class="ri-instagram-line"></i></a>
            <a className='icon' href=""><i class="ri-twitter-fill"></i></a>
            <a className='icon' href=""><i class="ri-youtube-fill"></i></a>
        </div>
        <div className="navs">
            <ul class="ulnavs">
                <li>
                <Link class="navslink" to="/">Home</Link>
                </li>
                <li>
                <Link class="navslink" to="/shop">Shop</Link>
                </li>
                <li>
                <Link class="navslink" to="/shop">About Us</Link>
                </li>
                <li>
                <Link class="navslink" to="/contact">ContactUs</Link>
                </li>
            </ul>
        </div>
        <div className="copy">
            <h5>&#169;Copyright-All rights reserved</h5>
        </div>
    </footer>
  )
}

export default Footer