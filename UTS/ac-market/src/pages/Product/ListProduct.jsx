import React from "react";
import Productlist from "../../components/ProductList";

const ListProduct = () => {
  return (
    <>
      <div className="my-5">
        <h1>All Products</h1>
        <hr />
        <Productlist/>
      </div>
    </>
  );
};

export default ListProduct;
