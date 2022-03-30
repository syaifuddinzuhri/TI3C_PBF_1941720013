import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactJsAlert from "reactjs-alert";

const Cart = () => {
  const navigate = useNavigate();
  const [carts, setCarts] = useState([]);
  const [alert, setAlert] = useState({});
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  function currencyFormat(num) {
    return (
      "Rp" +
      parseInt(num)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  }
  const getCarts = () => {
    fetch("http://localhost:3001/carts")
      .then((res) => res.json())
      .then((json) => {
        var total = json.reduce(function (_this, val) {
          return _this + val.total;
        }, 0);
        setTotal(total);
        setCount(json.length);
        setCarts(json);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCarts();
  }, []);

  const handleRemove = (id) => (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/carts/${id}`, { method: "DELETE" }).then(
      (res) => getCarts()
    );
  };

  const handleUpdateCart = (id, price) => (e) => {
    if (e.target.value) {
      if (e.target.value < 1) {
        setAlert({
          type: "error",
          status: true,
          title: "Qty must be greater than 0",
        });
        return true;
      }
      fetch(`http://localhost:3001/carts/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          qty: e.target.value,
          total: e.target.value * price,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          getCarts();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleCheckout = () => {
    carts.forEach((element) => {
      let timestamp = new Date().getTime();
      const payload = {
        id: timestamp + Math.floor(Math.random() * 10),
        product_name: element.product_name,
        product_img: element.product_img,
        product_price: element.product_price,
        qty: element.qty,
        total: element.qty * element.product_price,
      };

      fetch("http://localhost:3001/transactions", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).then((response) => {});
    });
    handleDeleteAllCarts();
    setAlert({
      type: "success",
      status: true,
      title: "Successfully checkout",
    });
  };

  const handleDeleteAllCarts = () => {
    carts.forEach((element) => {
      fetch(`http://localhost:3001/carts/${element.id}`, {
        method: "DELETE",
      }).then((res) => {});
    });
  };

  return (
    <>
      <Wrapper>
        <ReactJsAlert
          status={alert.status} // true or false
          type={alert.type} // success, warning, error, info
          title={alert.title}
          Close={() => setAlert({ status: false })}
        />
        <div className="whiteBg">
          <div className="container">
            <HeaderInfo style={{ marginBottom: "50px" }}>
              <h1 className="font40 extraBold">Carts</h1>
            </HeaderInfo>
            <Table style={{ marginBottom: "50px" }}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {carts.length > 0 ? (
                  carts.map((item, key) => {
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
                        <td width={100}>
                          <Form>
                            <input
                              type="number"
                              id="qty"
                              name="qty"
                              defaultValue={item.qty}
                              onChange={handleUpdateCart(
                                item.id,
                                item.product_price
                              )}
                              className="font20 extraBold"
                            />
                          </Form>
                        </td>
                        <td>{currencyFormat(item.total)}</td>
                        <td>
                          <DangerButton
                            type="submit"
                            style={{ marginRight: "10px" }}
                            onClick={handleRemove(item.id)}
                          >
                            Remove
                          </DangerButton>
                        </td>
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
            <ul style={{ marginBottom: "30px" }}>
              <li style={{ marginBottom: "10px" }}>Amount : {count}</li>
              <li style={{ marginBottom: "10px" }}>
                Total : {currencyFormat(total)}
              </li>
            </ul>
            <PrimaryButton
              style={{ marginBottom: "50px" }}
              onClick={handleCheckout}
            >
              Checkout
            </PrimaryButton>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Cart;

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 100px;
`;

const DangerButton = styled.button`
  box-shadow: inset 0px 0px 0px 0px #f29c93;
  background: linear-gradient(to bottom, #fe1a00 5%, #ce0100 100%);
  background-color: #fe1a00;
  border-radius: 42px;
  border: none;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #b23e35;
  :hover {
    background: linear-gradient(to bottom, #ce0100 5%, #fe1a00 100%);
    background-color: #ce0100;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;

const PrimaryButton = styled.button`
  border: none;
  box-shadow: inset 0px 1px 0px 0px #97c4fe;
  background: linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
  background-color: #3d94f6;
  border-radius: 42px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #1570cd;
  :hover {
    background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
    background-color: #1e62d0;
  }
  :active {
    position: relative;
    top: 1px;
  }
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

const Form = styled.form`
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
`;
