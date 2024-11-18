import React, { useContext } from 'react';
import { dataContext } from '../Context/DataContext'; // Obtener carrito desde el contexto
import "./Cart.css";
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Cart = () => {
  const { cart } = useContext(dataContext); // Obtener el carrito desde el contexto

  // Calcular el total del carrito
  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
    <div>
      <Navbar/>
      <Banner/>

    <div className="cart-container">
      <h2>Resumen de la Compra</h2>

      {/* Cabecera con los títulos de las columnas */}
      <div className="cart-header">
        <div className="cart-column"><strong>Producto</strong></div>
        <div className="cart-column"><strong>Cantidad</strong></div>
        <div className="cart-column"><strong>Valor</strong></div>
      </div>

      {/* Mostrar los productos del carrito en filas */}
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-column">{item.producto}</div>
            <div className="cart-column">{item.quantity}</div>
            <div className="cart-column">${item.precio * item.quantity}</div>
          </div>
        ))
      ) : (
        <div>No hay productos en el carrito.</div>
      )}

      {/* Fila para mostrar el total */}
      <div className="cart-footer">
        <div className="cart-column"></div>
        <div className="cart-column"><strong>Total:</strong></div>
        <div className="cart-column"><strong>${total}</strong></div>
      </div>
    </div>
    <Footer/>

    </div>
  );
};

export default Cart;
