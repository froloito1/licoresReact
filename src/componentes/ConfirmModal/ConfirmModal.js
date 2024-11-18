import React from 'react';
import './ConfirmModal.css';

const ConfirmModal = ({ show, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>¿Estás seguro de que deseas ir al carrito?</h2>
        <div className="modal-buttons">
          <button className="btn-confirm" onClick={onConfirm}>
            Sí, ir al carrito
          </button>
          <button className="btn-cancel" onClick={onCancel}>
            No, cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
