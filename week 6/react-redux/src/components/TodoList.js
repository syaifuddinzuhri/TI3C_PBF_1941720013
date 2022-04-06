import React from "react";
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selector";
import { ListGroup, Alert } from "react-bootstrap";
import List from "./List";

const Todolist = (props) => {
  const { todos, visibilityFilter } = useSelector((state) => state);
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);
  return (
    <ListGroup className="my-4">
      {filterTodos.length > 0 ? (
        filterTodos.map((todo) => <List key={`todo-${todo.id}`} todo={todo} />)
      ) : (
        <Alert variant="danger">
          <Alert.Heading>Todo Empty</Alert.Heading>
          <p>You can add new todo by clicking on button "Add Todo"</p>
        </Alert>
      )}
    </ListGroup>
  );
};

export default Todolist;
