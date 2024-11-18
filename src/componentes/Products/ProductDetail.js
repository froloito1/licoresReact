import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el ID del producto desde la URL
import { dataContext } from '../Context/DataContext'; // El contexto de los productos
import './ProductDetail.css'; // El CSS que desees para los detalles
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const ProductDetail = () => {
  const { id } = useParams(); // Obtener el ID del producto de la URL
  const { data } = useContext(dataContext); // Obtener los productos desde el contexto

  // Buscar el producto que coincide con el ID
  const product = data.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (

<div>
      <Navbar/>
      <Banner/>

    <div className="product-detail">
      <img src={product.img} alt={product.producto} />
      <h2>{product.producto}</h2>
      <h4>${product.precio}</h4>
      <p>{product.descripcion}</p> 
      <button onClick={() => window.history.back()}>Volver</button> {/* Botón para regresar */}
    </div>
    <Footer/>
</div>
  );
};

export default ProductDetail;
