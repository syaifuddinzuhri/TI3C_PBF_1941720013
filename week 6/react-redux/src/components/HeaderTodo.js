import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilter } from "../redux/actions/actionsTodos";
import Modaltodo from "./ModalTodo";

const Headertodo = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.visibilityFilter);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const handleSetFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(setVisibilityFilter(e.target.value));
  };

  return (
    <Row className="mt-4 ">
      <Col>
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Add Todo
        </Button>
        <Modaltodo
          type="add"
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </Col>
      <Col>
        <Form.Group className="mb-3">
          <Form.Select onChange={handleSetFilter} value={filterStatus}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
          </Form.Select>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default Headertodo;
