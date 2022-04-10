import { API_URL_CARTS, API_URL_PRODUCTS } from "../../constants/global";
import { ADD_CART, REMOVE_CART, SHOW_ALL } from "../types/cartTypes";

export const showAll = () => async (dispatch) => {
  fetch(`${API_URL_CARTS}`)
    .then((res) => res.json())
    .then((json) => {
      var total = json.reduce(function (_this, val) {
        return _this + val.total;
      }, 0);
      dispatch({
        type: SHOW_ALL,
        payload: {
          result: json,
          total: total,
          jumlah: json.length,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addCart = (request) => async (dispatch) => {
  fetch(`${API_URL_CARTS}`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  }).then((res) => {
    dispatch({
      type: ADD_CART,
      payload: request,
    });
  });
};

export const updateQty = (request) => async (dispatch) => {
  fetch(`${API_URL_CARTS}${request.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      qty: request.qty,
      total: request.total,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      //   dispatch(showAll());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeCart = (id) => async (dispatch) => {
  fetch(`${API_URL_CARTS}${id}`, { method: "DELETE" }).then((res) => {
    dispatch({
      type: REMOVE_CART,
      payload: {
        id,
      },
    });
  });
};

export const removeAllCart = (request) => async (dispatch) => {
  request.forEach((element) => {
    let id = element.id;
    fetch(`${API_URL_CARTS}${id}`, { method: "DELETE" }).then((res) => {
      fetch(`${API_URL_PRODUCTS}${element.product_id}`, {
        method: "PATCH",
        body: JSON.stringify({
          stock: parseInt(element.product_stock) - parseInt(element.qty),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => res.json());

      dispatch({
        type: REMOVE_CART,
        payload: {
          id,
        },
      });
    });
  });
};
