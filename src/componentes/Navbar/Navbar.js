import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from '../../imagenes/logo.jpg'; // Ruta relativa a la carpeta imagenes desde NavBar.jsx


const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="row">
        <nav className="navbar">
          <a href="/">
            <img src={logo} alt="Logo" width="100" />
          </a>
          <Link className="seeCarrito" to={"/Cart"}>
            🛒
          </Link>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;