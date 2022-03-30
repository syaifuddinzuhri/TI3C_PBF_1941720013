import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import FullButton from "../../components/Buttons/FullButton";
import ReactJsAlert from "reactjs-alert";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [alert, setAlert] = useState({});

  const [qty, setQty] = useState(1);

  const handleQtyChange = (e) => {
    setQty(e.target.value);
  };

  const handelAddToCart = (e) => {
    let timestamp = new Date().getTime();
    const payload = {
      id: timestamp,
      product_id: product.id,
      product_name: product.name,
      product_img: product.img,
      product_price: product.price,
      total: qty * product.price,
      qty: qty,
    };

    fetch("http://localhost:3001/carts", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((response) => {
      setAlert({
        type: "success",
        status: true,
        title: "Successfully add to cart",
      });
      setTimeout(() => {
        navigate("/cart");
      }, 3000);
    });
  };

  const handleCheckout = (e) => {
    if (qty < 1) {
      setAlert({
        type: "error",
        status: true,
        title: "Qty must be greater than 0",
      });
      return true;
    }
    let timestamp = new Date().getTime();
    const payload = {
      id: timestamp,
      product_name: product.name,
      product_img: product.img,
      product_price: product.price,
      qty: qty,
      total: qty * product.price,
    };

    fetch("http://localhost:3001/transactions", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((response) => {
      setAlert({
        type: "success",
        status: true,
        title: "Successfully checkout",
      });
      setTimeout(() => {
        navigate("/transaction");
      }, 3000);
    });
    setQty(1);
  };

  function currencyFormat(num) {
    return (
      "Rp" +
      parseInt(num)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  }

  const getProductDetail = () => {
    fetch(`http://localhost:3001/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductDetail();
  });

  return (
    <>
      <Wrapper>
        <div className="whiteBg">
          <div className="container">
            <HeaderInfo style={{ marginBottom: "50px" }}>
              <h1 className="font40 extraBold">Product Detail</h1>
            </HeaderInfo>
            <Container>
              <LeftSide>
                <ReactJsAlert
                  status={alert.status} // true or false
                  type={alert.type} // success, warning, error, info
                  title={alert.title}
                  Close={() => setAlert({ status: false })}
                />
                <ImgBtn className="aniamte pointer">
                  <img
                    className="radius8"
                    src={product?.img}
                    alt="project"
                  ></img>
                </ImgBtn>
              </LeftSide>
              <RightSide>
                <h3 style={{ marginBottom: "20px" }}>{product?.name}</h3>
                <h1 style={{ color: "#7620FF" }}>
                  {currencyFormat(product?.price)}
                </h1>
                <hr style={{ marginTop: "15px" }} />
                <p style={{ fontWeight: "bold", color: "#7620FF" }}>Detail</p>
                <hr style={{ marginBottom: "15px" }} />
                <p style={{ fontWeight: "normal" }}>{product?.description} </p>
                <Form style={{ width: "100px" }}>
                  <label className="font13">Qty:</label>
                  <input
                    type="number"
                    id="qty"
                    name="qty"
                    value={qty}
                    onChange={handleQtyChange}
                    className="font20 extraBold"
                  />
                </Form>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  <div style={{ width: "190px", marginRight: "15px" }}>
                    <FullButton
                      title="Add to cart"
                      action={handelAddToCart}
                      border
                    />
                  </div>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Checkout" action={handleCheckout} />
                  </div>
                </ButtonsRow>
              </RightSide>
            </Container>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Detail;

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
`;

const Container = styled.div`
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 70%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin-top: 30px;
  }
`;

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;

const Form = styled.form`
  padding: 20px 0 0 0;
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
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
