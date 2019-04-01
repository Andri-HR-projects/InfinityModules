import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class CartoonNetworkSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        className={`spinnerContainer ${spinning ? 'spin' : ''}`}
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
