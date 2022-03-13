import React from "react";
import PropTypes from "prop-types";
import './Modal.css';

const Modal = ({onClose}) => (
  <div className="modal-container">
    <div className="modal-content">
      <div class="modal-header">
        <button className="fechar" onClick={onClose}> X </button>
        <h2>Título do anime</h2>
      </div>
      <div class="modal-body">
        <h3>Sinopse</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div class="modal-footer">
        <button>Assistir</button>
        <button>Remover</button>
      </div>
    </div>
  </div>
)

Modal.propTypes = {
  onClose: PropTypes.func
}

export default Modal;