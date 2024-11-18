import React, { useState } from 'react';
import "./RequerimientosCompra.css";
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';



const RequerimientosCompra = () => {
  const navigate = useNavigate(); // Coloca el hook aquí, dentro del componente

  // Estado para cada campo
  const [nombre, setNombre] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tipoEntrega, setTipoEntrega] = useState('envio');
  
  // Función para limpiar los campos
  const limpiarCampos = () => {
    setNombre('');
    setPresupuesto('');
    setDireccion('');
    setTipoEntrega('envio');
  };

  // Función para manejar el envío del formulario
  const manejarEnvio = (event) => {
    event.preventDefault();
    navigate('/home'); // redireccionamos al home

  };

  return (
    <div>
      <Navbar/>
      <Banner/>
    
    <div className="form-container">
      
      <h2>Formulario para Requerimiento de Compra</h2>
      <form onSubmit={manejarEnvio}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre de quien compra:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese su nombre"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="presupuesto">Presupuesto máximo:</label>
          <input
            type="text"
            id="presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
            placeholder="Ingrese el presupuesto"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Dirección de entrega:</label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            placeholder="Ingrese la dirección"
            required
          />
        </div>

        <div className="form-group">
          <label>Tipo de entrega:</label>
          <div>
            <label>
              <input
                type="radio"
                name="tipoEntrega"
                value="envio"
                checked={tipoEntrega === 'envio'}
                onChange={() => setTipoEntrega('envio')}
              />
              Envío
            </label>
            <label>
              <input
                type="radio"
                name="tipoEntrega"
                value="recogida"
                checked={tipoEntrega === 'recogida'}
                onChange={() => setTipoEntrega('recogida')}
              />
              Recogida en tienda
            </label>
          </div>
        </div>

        <div className="form-actions">
          
          <button type='submit'>Iniciar compra
          </button>
          <button type="button" onClick={limpiarCampos}>Limpiar campos</button>
          
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};
export default RequerimientosCompra;
