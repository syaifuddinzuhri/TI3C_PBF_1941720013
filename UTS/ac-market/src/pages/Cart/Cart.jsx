import React, { useEffect} from "react";
import { Table, Image, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currencyFormat } from "../../helpers/global";
import {
  removeAllCart,
  removeCart,
  showAll,
  updateQty,
} from "../../redux/actions/cartActions";
import { checkoutAll } from "../../redux/actions/transactionActions";

const Cart = () => {
  const { carts_state } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(showAll());
  }, [dispatch]);

  const handleUpdateCart = (item) => (e) => {
    e.preventDefault();
    let val = e.target.value;
    if (val) {
      if (val < 1) {
        alert("Please enter a number greater than 0");
        e.target.value = 1;
        return false;
      }
      if (val > parseInt(item.product_stock)) {
        alert("Stock is not enough");
        e.target.value = 1;
        return false;
      }
      const payload = {
        id: item.id,
        qty: val,
        total: val * item.product_price,
      };
      dispatch(updateQty(payload));
      dispatch(showAll());
    }
  };

  const handleRemoveCart = (id) => (e) => {
    e.preventDefault();
    dispatch(removeCart(id));
  };

  const handleCheckoutAll = () => (e) => {
    e.preventDefault();
    dispatch(checkoutAll(carts_state.carts));
    dispatch(removeAllCart(carts_state.carts));
    navigate('/transaction')
  };

  return (
    <>
      <div className="my-5">
        <h1>Carts</h1>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>QTY</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {carts_state.carts && carts_state.carts.length > 0 ? (
              carts_state.carts.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>
                      <Image
                        src={"/images/" + item.product_img}
                        className="img-thumbnail"
                        width={150}
                      />
                    </td>
                    <td>{item.product_name}</td>
                    <td>{currencyFormat(item.product_price)}</td>
                    <td>
                      <Form.Control
                        className="mx-3 text-center"
                        style={{ width: "100px" }}
                        type="number"
                        placeholder="QTY"
                        defaultValue={item.qty}
                        onChange={handleUpdateCart(item)}
                      />
                    </td>
                    <td>{currencyFormat(item.total)}</td>
                    <td>
                      <Button
                        type="submit"
                        variant="outline-danger"
                        onClick={handleRemoveCart(item.id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7}>Data Empty</td>
              </tr>
            )}
          </tbody>
        </Table>
        <h5>Jumlah : {carts_state.jumlah} </h5>
        <h3>Total : {currencyFormat(carts_state.total)} </h3>
        <Button type="submit" variant="success" onClick={handleCheckoutAll()}>
          Checkout
        </Button>
      </div>
    </>
  );
};

export default Cart;
