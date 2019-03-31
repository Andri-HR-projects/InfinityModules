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
    this.state = { isModalOpen: false, isClockOpen: false, time: new Date(), date: '', tab: 1 };
  }
  render() {
    const { isModalOpen } = this.state;
    console.log(this.state.tab);
    return (
      <div>
        <h1>Modal</h1>
        <button onClick={() => this.setState({ isModalOpen: true })}>Open modal</button>
        <Modal isOpen={isModalOpen} onClose={() => this.setState({ isModalOpen: false })}>
          <Modal.Title>ModalTitle</Modal.Title>
          <Modal.Body>ModalBody</Modal.Body>
          <Modal.Footer>ModalFooter</Modal.Footer>
        </Modal>

        <h1>Carousels</h1>
        <Carousel images={['']} size="small" />
        <Carousel images={['']} size="medium" />
        <Carousel images={['']} size="large" />

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
        <DatePicker onDatePick={date => this.setState({ date: date })} locale="is-IS" />
        <h1>{this.state.date} </h1>

        <h1>CartoonNetworkSpinner</h1>
        <CartoonNetworkSpinner interval={2} />
      </div>
    );
  }
}

export default App;
