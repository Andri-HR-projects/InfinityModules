/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { row, column } from './style.module.css';

class Row extends Component {
  // eslint-disable-next-line class-methods-use-this
  calculatePercentage(width) {
    return (width / 12.0) * 100;
  }

  render() {
    const { children } = this.props;
    return (
      <div className={`${row}`}>
        {children.map((child, i) => {
          const cWidth = this.calculatePercentage(child.props.size);
          return (
            <div className={`${column}`} key={i} style={{ width: `calc(${cWidth}% - 2px)` }}>
              {child}
            </div>
          );
        })}
      </div>
    );
  }
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
