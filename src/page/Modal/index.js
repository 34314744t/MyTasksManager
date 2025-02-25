import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className='modalStyle'>
      MODAL DE AGREGAR
      { children }
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };