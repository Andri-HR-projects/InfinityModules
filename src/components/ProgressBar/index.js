import React from 'react';
import PropTypes from 'prop-types';
import styles, { bar } from './style.css';
const ProgressBar = ({ progress, striped, animated, state }) => {
  return (
    <div className={`${bar}`}>
      <div
        style={{ width: `${progress}%` }}
        className={`${styles.progress} ${styles[state]} ${striped ? styles.striped : ''}`}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  striped: PropTypes.bool.isRequired,
  animated: PropTypes.bool.isRequired,
  state: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
};

ProgressBar.defaultProps = {
  animated: false,
  striped: false,
};

export default ProgressBar;
