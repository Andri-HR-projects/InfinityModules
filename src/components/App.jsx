/* eslint-disable no-shadow */
import React, { Component } from 'react';
import Modal from './Modal';
import Carousel from './Carousel';
import Row from './Row';
import Col from './Col';
import DatePicker from './DatePicker';
import CartoonNetworkSpinner from './CartoonNetworkSpinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      date: '',
    };
  }

  render() {
    const { isModalOpen, date } = this.state;
    return (
      <div>
        <h1>Modal</h1>
        <button type="button" onClick={() => this.setState({ isModalOpen: true })}>
          Open modal
        </button>
        <Modal isOpen={isModalOpen} onClose={() => this.setState({ isModalOpen: false })}>
          <Modal.Title>ModalTitle</Modal.Title>
          <Modal.Body>ModalBody</Modal.Body>
          <Modal.Footer>ModalFooter</Modal.Footer>
        </Modal>

        <h1>Carousels</h1>
        <Carousel
          images={[
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png',
          ]}
          size="small"
        />
        <Carousel
          images={[
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png',
          ]}
          size="medium"
        />
        <Carousel
          images={[
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png',
          ]}
          size="large"
        />

        <h1>Rows and Cols</h1>
        <Row>
          <Col size={2} />
          <Col size={2} />
          <Col size={2} />
        </Row>
        <Row>
          <Col size={2} />
          <Col size={3} />
          <Col size={5} />
        </Row>
        <Row>
          <Col size={4} />
          <Col size={4} />
          <Col size={4} />
        </Row>

        <h1>Date Picker</h1>
        <DatePicker onDatePick={date => this.setState({ date })} locale="is-IS" />
        <h1>{date}</h1>

        <h1>CartoonNetworkSpinner</h1>
        <CartoonNetworkSpinner interval={1} />
      </div>
    );
  }
}

export default App;
