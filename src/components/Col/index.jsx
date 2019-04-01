import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Col = ({ size }) => <div className="colContainer">{`Col-${size}`}</div>;

Col.propTypes = {
  size: PropTypes.number,
};
Col.defaultProps = {
  size: 1,
};

export default Col;
