import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import ReactJsAlert from "reactjs-alert";

export default function ProjectBox({ data, action }) {
  const [alert, setAlert] = useState({});
  const navigate = useNavigate();

  function currencyFormat(num) {
    return (
      "Rp" +
      parseInt(num)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  }

  const handelAddToCart = (data) => (e) => {
    // e.preventDefault();
    let timestamp = new Date().getTime();
    const payload = {
      id: timestamp,
      product_id: data.id,
      product_name: data.name,
      product_img: data.img,
      product_price: data.price,
      total: 1 * data.price,
      qty: 1,
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
  return (
    <Wrapper>
      <ReactJsAlert
        status={alert.status} // true or false
        type={alert.type} // success, warning, error, info
        title={alert.title}
        Close={() => setAlert({ status: false })}
      />
      <ImgBtn
        className="aniamte pointer"
        onClick={action ? () => action() : null}
      >
        <img className="radius8" src={data.img} alt="project"></img>
      </ImgBtn>
      <h3 className="font20 extraBold">{data.name}</h3>
      <h3 className="font20 extraBold">{currencyFormat(data.price)}</h3>
      <div style={{ textAlign: "left" }}>
        <p>Stock : {data.stock} </p>
      </div>
      <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
        <div style={{ width: "190px", marginRight: "15px" }}>
          <FullButton
            title="Add to cart"
            action={handelAddToCart(data)}
            border
          />
        </div>
        <div style={{ width: "190px" }}>
          <FullButton
            title="Checkout"
            action={action ? () => action() : null}
          />
        </div>
      </ButtonsRow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
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
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
