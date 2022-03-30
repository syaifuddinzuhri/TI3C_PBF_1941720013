import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Transaction = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  function currencyFormat(num) {
    return (
      "Rp" +
      parseInt(num)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  }

  useEffect(() => {
    const getProducts = () => {
      fetch("http://localhost:3001/transactions")
        .then((res) => res.json())
        .then((json) => {
          setTransactions(json);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getProducts();
  }, []);

  return (
    <>
      <Wrapper>
        <div className="whiteBg">
          <div className="container">
            <HeaderInfo style={{ marginBottom: "50px" }}>
              <h1 className="font40 extraBold">Transactions</h1>
            </HeaderInfo>
            <Table style={{ marginBottom: "50px" }}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length > 0 ? (
                  transactions.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <img
                            src={item.product_img}
                            alt=""
                            style={{ width: "100px" }}
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
                    <td colSpan={5}>Data Empty</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Transaction;

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    vertical-align: middle;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #7620ff;
    color: white;
  }
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
