import { SHOW_ALL, SHOW_TOP_LIMIT, SHOW_DETAIL } from "../types/productTypes";
import { API_URL_PRODUCTS } from "../../constants/global";

export const showAll = () => async (dispatch) => {
  fetch(`${API_URL_PRODUCTS}`)
    .then((res) => res.json())
    .then((json) => {
      dispatch({
        type: SHOW_ALL,
        payload: {
          json,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const showLimit = (limit) => async (dispatch) => {
  fetch(`${API_URL_PRODUCTS}?_limit=${limit}`)
    .then((res) => res.json())
    .then((json) => {
      dispatch({
        type: SHOW_TOP_LIMIT,
        payload: {
          json,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const showDetail = (id) => async (dispatch) => {
  fetch(`${API_URL_PRODUCTS}${id}`)
    .then((res) => res.json())
    .then((json) => {
      dispatch({
        type: SHOW_DETAIL,
        payload: {
          json,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateStock = (request) => async (dispatch) => {
  fetch(`${API_URL_PRODUCTS}${request.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      stock: parseInt(request.stock) - parseInt(request.qty),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};
