import React from 'react';
import PropTypes from 'prop-types';
import {
  modalOverlay,
  modalClose,
  modalChild,
  modalTitle,
  modalBody,
  modalFooter,
  modal,
  hidden,
} from './style.module.css';

const Modal = ({ isOpen, onClose, children }) => (
  <div
    className={`${modalOverlay} ${isOpen ? '' : hidden}`}
    onClick={onClose}
    role="button"
    tabIndex="0"
    onKeyPress={() => {}}
  >
    <div className={`${modal}`}>
      <div
        className={`${modalClose}`}
        onClick={onClose}
        role="button"
        tabIndex="0"
        onKeyPress={() => {}}
      >
        &times;
      </div>
      {children}
    </div>
  </div>
);

Modal.Title = ({ children }) => <div className={`${modalChild} ${modalTitle}`}>{children}</div>;
Modal.Body = ({ children }) => <div className={`${modalChild} ${modalBody}`}>{children}</div>;
Modal.Footer = ({ children }) => <div className={`${modalChild} ${modalFooter}`}>{children}</div>;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
Modal.Title.propTypes = {
  children: PropTypes.node,
};
Modal.Body.propTypes = {
  children: PropTypes.node,
};
Modal.Footer.propTypes = {
  children: PropTypes.node,
};

Modal.Title.defaultProps = {
  children: null,
};
Modal.Body.defaultProps = {
  children: null,
};
Modal.Footer.defaultProps = {
  children: null,
};
Modal.defaultProps = {
  isOpen: false,
};

export default Modal;
