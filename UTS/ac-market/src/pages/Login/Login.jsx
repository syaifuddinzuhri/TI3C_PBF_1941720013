import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <section className="bg-primary" style={{ minHeight: "100vh" }}>
        <Container>
          <Row className="py-5">
            <Col md={{ span: 6, offset: 3 }}>
              <Card>
                <Card.Header className="fw-bold text-center">
                  <h1>LOGIN</h1>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="username">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter username"
                        name="username"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
