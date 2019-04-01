import React from 'react';
import PropTypes from 'prop-types';
import { spinnerContainer, spin } from './style.module.css';

class CartoonNetworkSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Pokemon was on Cartoon Network from 2000-2016
      // https://pokemon.fandom.com/wiki/Cartoon_Network
      images: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png',
      ],
      currentImageIndex: 0,
      isSpinning: false,
    };
  }

  componentDidMount() {
    const { interval } = this.props;
    setInterval(() => this.Spin(), interval * 1000);
    setInterval(() => this.updateImage(), interval * 1000);
  }

  updateImage() {
    const { images, currentImageIndex } = this.state;
    if (currentImageIndex === images.length - 1) {
      this.setState({ currentImageIndex: 0 });
    } else {
      this.setState({ currentImageIndex: currentImageIndex + 1 });
    }
  }

  Spin() {
    const { isSpinning } = this.state;
    this.setState({ isSpinning: !isSpinning });
  }

  render() {
    const { images, currentImageIndex, isSpinning } = this.state;
    return (
      <div
        className={`${spinnerContainer} ${isSpinning ? spin : ''}`}
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
