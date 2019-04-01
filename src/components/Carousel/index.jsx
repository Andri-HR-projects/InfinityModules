import React from 'react';
import PropTypes from 'prop-types';
import styles, {
  carouselContainer,
  carouselImage,
  carouselButtonLeft,
  carouselButtonRight,
} from './style.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  previousImage() {
    const { currentImageIndex } = this.state;
    const { images } = this.props;
    if (currentImageIndex === 0) {
      this.setState({ currentImageIndex: images.length - 1 });
    } else {
      this.setState({ currentImageIndex: currentImageIndex - 1 });
    }
  }

  nextImage() {
    const { currentImageIndex } = this.state;
    const { images } = this.props;
    if (currentImageIndex === images.length - 1) {
      this.setState({ currentImageIndex: 0 });
    } else {
      this.setState({ currentImageIndex: currentImageIndex + 1 });
    }
  }

  render() {
    const { currentImageIndex } = this.state;
    const { images, size } = this.props;
    return (
      <div className={`${carouselContainer} ${styles[`carousel-${size}`]}`}>
        <button type="button" className={carouselButtonLeft} onClick={() => this.previousImage()}>
          {' '}
          &lt;
          {' '}
        </button>
        <img className={carouselImage} src={images[currentImageIndex]} alt="currentImage" />
        <button type="button" className={carouselButtonRight} onClick={() => this.nextImage()}>
          {' '}
          &gt;
          {' '}
        </button>
      </div>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Carousel.defaultProps = {
  size: 'medium',
};

export default Carousel;
