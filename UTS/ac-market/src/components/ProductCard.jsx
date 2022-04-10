import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currencyFormat } from "../helpers/global";
import { addCart } from "../redux/actions/cartActions";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    let timestamp = new Date().getTime();
    const payload = {
      id: timestamp,
      product_id: product.id,
      product_name: product.name,
      product_img: product.img,
      product_price: product.price,
      product_stock: product.stock,
      total: 1 * product.price,
      qty: 1,
    };
    dispatch(addCart(payload));
    navigate("/cart");
  };

  return (
    <>
      <Col md={3} className="mb-3">
        <Card>
          <Card.Img
            onClick={() => navigate(`/product/${product.id}`)}
            variant="top"
            src={'/images/' + product.img}
            style={{ cursor: "pointer" }}
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              <small className="text-danger fw-bold">
                {currencyFormat(product.price)}
              </small>
            </Card.Text>
            <Card.Text>
              <small className="text-dark fw-bold">
                Stock : {product.stock}
              </small>
            </Card.Text>
            <Row>
              <Col>
                <Button
                  variant="outline-primary"
                  className="w-100"
                  type="submit"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
              </Col>
              <Col>
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  Buy Now
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
