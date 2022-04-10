import React, { Component } from "react";
import { Col, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import me from "../../assets/me.jpeg";

const About = () => {
  return (
    <>
      <Row>
        <Col className="text-center">
          <h1>About Me</h1>
          <Row>
            <Col md={4}>
              <Image src={me} className="img-thumbnail w-100" />
            </Col>
            <Col md={8} className="text-start">
              <ListGroup>
                <ListGroupItem>
                  <p className="fw-bold m-0">NIM</p>
                  <p className="m-0">1941720013</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Full Name</p>
                  <p className="m-0">Mochammad Syaifuddin Zuhri</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Class</p>
                  <p className="m-0">TI-3C</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Study Program</p>
                  <p className="m-0">D-IV Informatic Engineering</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Department</p>
                  <p className="m-0">Information Technology</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Campus</p>
                  <p className="m-0">State Polytechnic of Malang</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Email</p>
                  <p className="m-0">1941720013@student.polinema.ac.id</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="fw-bold m-0">Address</p>
                  <p className="m-0">Prigen, Pasuruan, East Java</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default About;
