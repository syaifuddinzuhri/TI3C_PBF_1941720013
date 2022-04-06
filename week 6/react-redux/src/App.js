import { Container, Row, Col } from "react-bootstrap";
import Headertodo from "./components/HeaderTodo";
import Todolist from "./components/TodoList";

function App() {
  return (
    <Container className="my-5">
      <Row className="text-center">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>TODO LIST WITH REDUX</h1>
          <Headertodo></Headertodo>
          <Todolist/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
