import React from 'react';
import PropTypes from 'prop-types';
import {
  modalTitle,
  modalOverlay,
  modal,
  modalClose,
  hidden,
  modalFooter,
  modalBody,
} from './style.css';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`${modalOverlay} ${isOpen ? '' : hidden}`}>
      <div className={modal}>
        <div className={modalClose} onClick={onClose}>
          <i className="fa fa-times" />
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.Title = ({ children }) => <div className={modalTitle}>{children}</div>;
Modal.Body = ({ children }) => <div className={modalBody}>{children}</div>;
Modal.Footer = ({ children }) => <div className={modalFooter}>{children}</div>;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
