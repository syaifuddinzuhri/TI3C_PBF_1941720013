import React, { useEffect, useState } from "react";
import { Button, Col, Row, Image, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { currencyFormat } from "../../helpers/global";
import { addCart } from "../../redux/actions/cartActions";
import { showDetail, updateStock } from "../../redux/actions/productActions";
import { singleCheckout } from "../../redux/actions/transactionActions";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [qty, setQty] = useState(1);
  const { products_state } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showDetail(params.id));
  }, [params.id, dispatch]);

  const handleAddToCart = () => {
    let timestamp = new Date().getTime();
    const payload = {
      id: timestamp,
      product_id: products_state.detail.id,
      product_name: products_state.detail.name,
      product_img: products_state.detail.img,
      product_price: products_state.detail.price,
      product_stock: products_state.detail.stock,
      total: qty * products_state.detail.price,
      qty: qty,
    };
    dispatch(addCart(payload));
    navigate("/cart");
  };

  const handleBuy = () => {
    if (qty > products_state.detail.stock) {
      setQty(1);
      alert("Stock is not enough");
      return false;
    }
    let timestamp = new Date().getTime();
    const payload = {
      id: timestamp,
      product_id: products_state.detail.id,
      product_name: products_state.detail.name,
      product_img: products_state.detail.img,
      product_price: products_state.detail.price,
      total: qty * products_state.detail.price,
      qty: qty,
    };
    dispatch(singleCheckout(payload));
    dispatch(
      updateStock({
        id: products_state.detail.id,
        stock: products_state.detail.stock,
        qty: qty,
      })
    );
    navigate("/transaction");
  };

  return (
    <>
      <div className="my-5">
        <Button
          variant="outline-danger"
          className="mb-3"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <h1>Product Detail</h1>
        <hr />
        <Row>
          <Col md={4}>
            <Image
              src={"/images/" + products_state.detail.img}
              className="img-thumbnail w-100"
            />
          </Col>
          <Col md={8}>
            <h1>
              {products_state.detail ? products_state.detail.name : "Not Found"}
            </h1>
            <h3 className="text-danger fw-bold my-3">
              {currencyFormat(
                products_state.detail ? products_state.detail.price : 0
              )}
            </h3>
            <p>
              {products_state.detail
                ? products_state.detail.description
                : "Not Found"}
            </p>
            <hr />
            <div className="mb-3" style={{ width: "150px" }}>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                className="text-center"
                type="number"
                placeholder="QTY"
                defaultValue={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </div>
            <Button
              className="me-4"
              variant="outline-primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button onClick={handleBuy}>Buy Now</Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Detail;
