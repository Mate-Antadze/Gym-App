import React, { useState } from 'react';
import './Navbar.css'; // Update the import statement to include the correct file path
import Logo from '../../assets/logo.png';
import { CgShoppingBag } from 'react-icons/cg';
import { GoThreeBars } from 'react-icons/go'


function Navbar() {

  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () =>{
    setShowMenu((showMenu)=>!showMenu)
  }
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="" />
        <h2>Amazon</h2>
      </div>

      <div className="right">

      <div className="bars" onClick={toggleMenu}>
        <GoThreeBars />
      </div>

        <div className="menu">
          <ul className="menu" style={{display: showMenu? 'inherit': 'none'}}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>Eng</li>
          </ul>
        </div>
        <input type="text" className="search" placeholder='Search' />
        <CgShoppingBag className="cart" />
      </div>
    </div>
  );
}

export default Navbar;