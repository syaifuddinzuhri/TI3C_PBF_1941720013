import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showAll, showLimit } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";

const Productlist = ({ limit }) => {
  const { products_state } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (limit) {
      dispatch(showLimit(limit));
    } else {
      dispatch(showAll());
    }
  }, [limit, dispatch]);
  
  return (
    <Row className="my-5">
      {limit ? (
        products_state.top_products ? (
          products_state.top_products.map((product, index) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h1>Not FOund</h1>
        )
      ) : products_state.products ? (
        products_state.products.map((product, index) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <h1>Not FOund</h1>
      )}
    </Row>
  );
};

export default Productlist;
