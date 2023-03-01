import React from 'react'
import Logo from "./../images/Logo.png";
import Cart from "./../images/Cart.png";

import {Routes,Route,Link} from "react-router-dom";
const Navigation = () => {
  return (
    
        <>
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        
          <Link to="/">
            <img src={Logo} style={{ height: 45 }} alt="logo" />
          </Link>
          <ul className="flex items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">
                <div>
                  <span>10</span>
                  <img src={Cart} alt="" />
                </div>
              </Link>
            </li>
          </ul>
      </nav>
    </>
  
    </>
    
  )
}

export default Navigation
