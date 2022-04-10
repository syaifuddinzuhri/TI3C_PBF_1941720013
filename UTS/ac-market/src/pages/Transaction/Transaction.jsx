import React, { useEffect } from "react";
import { Table, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormat } from "../../helpers/global";
import { showAll } from "../../redux/actions/transactionActions";

const Transaction = () => {
  const { transactions_state } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAll());
  }, [dispatch]);

  return (
    <>
      <div className="my-5">
        <h1>Transactions</h1>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>QTY</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {transactions_state.transactions &&
            transactions_state.transactions.length > 0 ? (
              transactions_state.transactions.map((item, key) => {
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
                    <td>{item.qty}</td>
                    <td>{currencyFormat(item.total)}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6}>Data Empty</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Transaction;
