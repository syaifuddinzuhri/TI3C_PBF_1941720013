import React from "react";
import { Carousel } from "react-bootstrap";
import Productlist from "../../components/ProductList";

const Home = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/slider1.jpeg"}
            alt="First slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/slider2.jpeg"}
            alt="First slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/slider3.webp"}
            alt="First slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="my-5">
        <h1>Top Products</h1>
        <hr />
        <Productlist limit={4} />
      </div>
    </>
  );
};

export default Home;
