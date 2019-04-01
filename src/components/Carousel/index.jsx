import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
    };
  }

  prevImage() {
    const { currentImage } = this.state;
    const { images } = this.props;
    if (currentImage === 0) {
      this.setState({ currentImage: images.length - 1 });
    } else {
      this.setState({ currentImage: currentImage - 1 });
    }
  }

  nextImage() {
    const { currentImage } = this.state;
    const { images } = this.props;
    if (currentImage === images.length - 1) {
      this.setState({ currentImage: 0 });
    } else {
      this.setState({ currentImage: currentImage + 1 });
    }
  }

  render() {
    const { currentImage } = this.state;
    const { images, size } = this.props;
    return (
      <div className={`carouselContainer ${size}`}>
        <button type="button" className="prevButton" onClick={() => this.prevImage()}>
          {' '}
          &lt;
          {' '}
        </button>
        <img className="carouselImg" src={images[currentImage]} alt="currentImage" />
        <button type="button" className="nextButton" onClick={() => this.nextImage()}>
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
