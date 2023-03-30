import React from "react";
import { ShoppingCart, User, ShoppingBag, GooglePhotosLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
  return (
    <div className="navbar">
      <h1 style={{ flex: 1, justifyContent: 'center', color: 'white', alignItems: "center", lineHeight: "100px" }}>Bonda Fashion Ecommerce Cart</h1>
      <div className="links">
        <Link to="/"> <ShoppingBag size={32} /> </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/cart/signInForm">
          <User size={32} /> </Link>
      </div>
    </div>
  );
};

export default Navbar;
