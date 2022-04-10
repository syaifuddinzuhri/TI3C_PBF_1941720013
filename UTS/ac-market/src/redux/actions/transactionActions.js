import { API_URL_TRANSACTIONS } from "../../constants/global";
import { SHOW_ALL, SINGLE_CHECKOUT } from "../types/transactionTypes";

export const showAll = () => async (dispatch) => {
  fetch(`${API_URL_TRANSACTIONS}`)
    .then((res) => res.json())
    .then((json) => {
      dispatch({
        type: SHOW_ALL,
        payload: {
          result: json,
          jumlah: json.length,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const singleCheckout = (request) => async (dispatch) => {
  fetch(`${API_URL_TRANSACTIONS}`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  }).then((res) => {
    dispatch({
      type: SINGLE_CHECKOUT,
      payload: request,
    });
  });
};

export const checkoutAll = (request) => async (dispatch) => {
  request.forEach((element) => {
    let timestamp = new Date().getTime();
    let payload = {
      id: timestamp,
      product_id: element.product_id,
      product_name: element.product_name,
      product_img: element.product_img,
      product_price: element.product_price,
      total: element.qty * element.product_price,
      qty: element.qty,
    };
    fetch(`${API_URL_TRANSACTIONS}`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      dispatch({
        type: SINGLE_CHECKOUT,
        payload: request,
      });
    });
  });
};
