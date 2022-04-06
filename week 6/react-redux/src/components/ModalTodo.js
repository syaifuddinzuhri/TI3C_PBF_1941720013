import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../redux/actions/actionsTodos";

const Modaltodo = (props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  useEffect(() => {
    if (props.type === "edit" && props.todo) {
      setText(props.todo.text);
    } else {
      setText("");
    }
  }, [props.todo, props.type, props.modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Required");
      return false;
    } else {
      if (props.type === "add") {
        dispatch(addTodo(text));
      } else {
        dispatch(editTodo(props.todo.id, text));
      }
    }
    setText("");
    props.setModalOpen(false);
  };

  return (
    <Modal show={props.modalOpen} onHide={() => props.setModalOpen(false)}>
      <Form>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.type === "add" ? "Add" : "Edit"} Todo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Input todo text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.setModalOpen(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Modaltodo;
