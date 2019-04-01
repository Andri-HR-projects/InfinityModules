import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Modal = ({ isOpen, onClose, children }) => (
  <div
    className={`modal__overlay ${isOpen ? '' : 'hidden'}`}
    onClick={onClose}
    role="button"
    tabIndex="0"
    onKeyPress={() => {}}
  >
    <div className="modal">
      <div
        className="modal__close"
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

Modal.Title = ({ children }) => <div className="modal--child modal__title">{children}</div>;
Modal.Body = ({ children }) => <div className="modal--child modal__body">{children}</div>;
Modal.Footer = ({ children }) => <div className="modal--child modal__footer">{children}</div>;

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
