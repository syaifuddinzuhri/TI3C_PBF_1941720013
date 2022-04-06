import React, { useState } from "react";
import { Col, ListGroup, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions/actionsTodos";
import Modaltodo from "./ModalTodo";

const List = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(props.todo.id));
  };

  const handleSetVisibility = () => {
    dispatch(toggleTodo(props.todo.id));
  };

  return (
    <ListGroup.Item>
      <Row className="align-items-center">
        <Col md={1}>
          <Form.Check type="checkbox" onChange={handleSetVisibility} defaultChecked={props.todo.completed ? true : false} />
        </Col>
        <Col md={8} className="text-start">
          <span
            style={{
              textDecoration: props.todo.completed ? "line-through" : "none",
            }}
          >
            {props.todo.text}{" "}
            {props.todo.completed ? "(completed)" : ""}
          </span>
        </Col>
        <Col md={3}>
          <Button variant="danger" className="me-1" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Edit
          </Button>
          <Modaltodo
            type="edit"
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            todo={props.todo}
          />
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default List;
