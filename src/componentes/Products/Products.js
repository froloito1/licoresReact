import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de importar useNavigate
import { dataContext } from '../Context/DataContext'; // Importar el contexto
import ConfirmModal from '../ConfirmModal/ConfirmModal'; // Asegúrate de importar el modal
import './Products.css';
import Footer from '../Footer/Footer';

const Products = () => {
  const { data, addToCart } = useContext(dataContext); // Obtener productos y la función addToCart del contexto
  const [quantities, setQuantities] = useState({}); // Estado para las cantidades de productos
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal de confirmación
  const navigate = useNavigate(); // Hook para navegar a otras rutas

  // Manejar cambios en el input de cantidad
  const handleQuantityChange = (id, value) => {
    const quantity = Math.max(0, parseInt(value) || 0);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  // Función para manejar la adición de productos al carrito
  const handleAddToCart = (product, quantity) => {
    if (quantity > 0) {
      addToCart(product, quantity); // Agregar al carrito usando la función del contexto
    }
  };

  // Función para mostrar el modal de confirmación
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Función para redirigir al carrito después de la confirmación
  const handleGoToCart = () => {
    setShowModal(false); // Cerrar el modal
    navigate('/cart'); // Redirigir al carrito
  };

  // Función para cancelar la redirección
  const handleCancel = () => {
    setShowModal(false); // Solo cerrar el modal sin hacer nada
  };

  // Función para navegar a la página de detalles del producto
  const handleViewDetail = (id) => {
    navigate(`/product/${id}`); // Redirige a la página del producto con el ID
  };

  return (
    <div className="product-card-container">
      {data.map((product) => {
        const quantity = quantities[product.id] || 0;

        return (
          <div key={product.id} className="card">
            <img src={product.img} alt={product.producto} />
            <h3>{product.producto}</h3>
            <h4>${product.precio}</h4>

            {/* Campo de cantidad con ID dinámico */}
            <input
              type="number"
              id={`quantity-${product.id}`} // ID dinámico basado en el ID del producto
              value={quantity} // Vinculamos el valor con el estado
              onChange={(e) =>
                handleQuantityChange(product.id, e.target.value) // Actualizamos el estado al cambiar el input
              }
              min={0} // La cantidad mínima es 0
            />

            {/* Botón para agregar el producto al carrito, deshabilitado si la cantidad es 0 */}
            <button
              className="boton-agregar-carrito"
              onClick={() => handleAddToCart(product, quantity)}
              disabled={quantity <= 0} // El botón está deshabilitado si la cantidad es 0
            >
              Agregar a Carrito
            </button>

            {/* Botón para ver el detalle del producto */}
            <button
              className="boton-ver-detalle"
              onClick={() => handleViewDetail(product.id)} // Redirigir al detalle del producto
            >
              Ver Detalle
            </button>
          </div>
        );
      })}

      {/* Botón para completar la compra */}
      <button className="boton-completar-compra" onClick={handleShowModal}>
        COMPLETAR COMPRA
      </button>

      {/* Modal de confirmación */}
      <ConfirmModal
        show={showModal}
        onConfirm={handleGoToCart}
        onCancel={handleCancel}
      />
      
    </div>
  );
};

export default Products;
