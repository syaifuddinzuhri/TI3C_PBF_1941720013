import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

class EditStudent extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.editStudentModal}
          onHide={this.props.toggleEditStudentModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="first_name"
                id="first_name"
                defaultValue={this.props.editStudentData.first_name}
                onChange={this.props.onChangeEditStudentHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="last_name"
                id="last_name"
                defaultValue={this.props.editStudentData.last_name}
                onChange={this.props.onChangeEditStudentHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                defaultValue={this.props.editStudentData.email}
                onChange={this.props.onChangeEditStudentHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone"
                name="phone"
                id="phone"
                defaultValue={this.props.editStudentData.phone}
                onChange={this.props.onChangeEditStudentHandler}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={this.props.toggleEditStudentModal}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => this.props.updateStudent()}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditStudent;
