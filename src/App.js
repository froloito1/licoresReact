// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './componentes/Context/DataContext'; // Usa el nombre correcto
import Home from './componentes/home/Home';
import Cart from './componentes/Carrito/Cart';
import RequerimientosCompra from './componentes/RequerimientosCompra/RequerimientosCompra';
import ProductDetail from './componentes/Products/ProductDetail'; // Asegúrate de importar el componente de detalles

function App() {
  return (
    <DataProvider> {/* Asegúrate de envolver tu aplicación con el proveedor */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RequerimientosCompra />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          
          {/* Nueva ruta para mostrar los detalles del producto */}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
