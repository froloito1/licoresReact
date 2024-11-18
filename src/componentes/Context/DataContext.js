import React, { createContext, useState, useEffect } from 'react'; 
import axios from 'axios';

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]); // Estado de los productos
  const [cart, setCart] = useState([]); // Estado del carrito

  useEffect(() => {
    // Cargar los datos de productos (puedes usar un archivo JSON o una API)
    axios.get('data.json').then((res) => setData(res.data));
  }, []); // Esto se ejecutará solo una vez al montar el componente

  // Función para agregar un producto al carrito
  const addToCart = (product, quantity) => {
    if (quantity > 0) {
      const productInCart = cart.find((item) => item.id === product.id);

      if (productInCart) {
        // Si el producto ya está en el carrito, solo actualizamos la cantidad
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          )
        );
      } else {
        // Si no está en el carrito, agregamos el producto con la cantidad especificada
        setCart((prevCart) => [...prevCart, { ...product, quantity }]);
      }
    }
  };

  return (
    <dataContext.Provider value={{ data, cart, addToCart }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
