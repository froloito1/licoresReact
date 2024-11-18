// Footer.js
import React from 'react';
import './Footer.css';
import facebook from '../../imagenes/facebook.jpg';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>BeerCompany</h2>
          <p>La ultima y nos Vamos!!</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Informacion de interes</h4>
            <ul>
              <li><a href="/home">Inicio</a></li>
              <li><a href="/about">Acerca de</a></li>
              <li><a href="/contact">Contacto</a></li>
              <li><a href="/privacy-policy">Política de Privacidad</a></li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BeerCompany 10 años contigo. www.beercompany.com.co</p>
        <p>&copy; {new Date().getFullYear()}  Todos los derechos reservados.</p>
        <p>&copy; {new Date().getFullYear()}  Luz Valencia</p>
      </div>
    </footer>
  );
};

export default Footer;

