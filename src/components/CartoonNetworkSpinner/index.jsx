import React from 'react';
import PropTypes from 'prop-types';
import { spinnerContainer, spin } from './style.css';

class CartoonNetworkSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [''],
      currentImageIndex: 0,
      spinning: false,
    };
  }
  componentDidMount() {
    const { interval } = this.props;
    setInterval(() => this.changeImage(), interval * 1000);
    setInterval(() => this.toggleSpinning(), interval * 1000);
  }
  changeImage() {
    const { images, currentImageIndex } = this.state;
    if (currentImageIndex === images.length - 1) {
      this.setState({ currentImageIndex: 0 });
    } else {
      this.setState({ currentImageIndex: currentImageIndex + 1 });
    }
  }
  toggleSpinning() {
    const { spinning } = this.state;
    this.setState({ spinning: !spinning });
  }

  render() {
    const { images, currentImageIndex, spinning } = this.state;
    return (
      <div
        className={`${spinnerContainer} ${spinning ? spin : ''}`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
    );
  }
}
CartoonNetworkSpinner.propTypes = {
  interval: PropTypes.number,
};
CartoonNetworkSpinner.defaultProps = {
  interval: 3,
};

export default CartoonNetworkSpinner;
