/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import design from './Modal.module.css';

const Modal = ({ largeURL, closeModal }) => {
  return (
    <div className={design.overlay} onClick={closeModal}>
      <div className={design.modal}>
        <img src={largeURL} alt="imgLarge" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeURL: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;

// dumb component =}
