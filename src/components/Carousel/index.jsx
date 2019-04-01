import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
    };
  }

  changeImage(change) {
    const { imageIndex } = this.state;
    const { images } = this.props;
    if (imageIndex === 0 && change === -1) {
      this.setState({ imageIndex: images.length - 1 });
    } else if (imageIndex === images.length - 1 && change === 1) {
      this.setState({ imageIndex: 0 });
    } else {
      this.setState({ imageIndex: imageIndex + change });
    }
  }

  render() {
    const { imageIndex } = this.state;
    const { images, size } = this.props;
    return (
      <div className={`${styles.carousel__container} ${styles[size]}`}>
        <button
          type="button"
          className={`${styles.btn} ${styles.btnCenter} ${styles.btnPrev}`}
          onClick={() => this.changeImage(-1)}
        >
          &lsaquo;
        </button>
        <div className={`${styles.image__container}`}>
          <img className={`${styles.carousel__image}`} src={images[imageIndex]} alt="current carousel" />
        </div>

        <button
          type="button"
          className={`${styles.btn} ${styles.btnCenter} ${styles.btnNext}`}
          onClick={() => this.changeImage(1)}
        >
          &rsaquo;
        </button>
      </div>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Carousel.defaultProps = {
  size: 'medium',
};

export default Carousel;
