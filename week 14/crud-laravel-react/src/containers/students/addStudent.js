import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

class AddStudent extends Component {
  render() {
    return (
      <div className="float-end">
        <Button variant="primary" onClick={this.props.toggleNewStudentModal}>
          Add Student
        </Button>

        <Modal
          show={this.props.newStudentModal}
          onHide={this.props.toggleNewStudentModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="first_name"
                id="first_name"
                value={this.props.newStudentData.first_name}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="last_name"
                id="last_name"
                value={this.props.newStudentData.last_name}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={this.props.newStudentData.email}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone"
                name="phone"
                id="phone"
                value={this.props.newStudentData.phone}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={this.props.toggleNewStudentModal}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => this.props.addStudent()}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddStudent;
