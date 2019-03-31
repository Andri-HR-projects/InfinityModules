import React from 'react';
import PropTypes from 'prop-types';
import { column } from './style.css';

class Row extends React.Component {
  calculatePercentage(width) {
    return (width / 12.0) * 100;
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        {children.map((c, i) => (
          <div
            className={column}
            key={i}
            style={{ width: `${this.calculatePercentage(c.props.size)}%` }}
          >
            {c}
          </div>
        ))}
      </div>
    );
  }
}

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;
