import { ADD_CART, REMOVE_CART, SHOW_ALL } from "../types/cartTypes";

const initialState = {
  carts: [],
  total: 0,
  jumlah: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ALL:
      return {
        ...state,
        carts: payload.result,
        total: payload.total,
        jumlah: payload.jumlah,
      };
    case ADD_CART:
      return {
        ...state,
        carts: [...state.carts, payload],
      };
    case REMOVE_CART:
      const numIndex = parseInt(payload.id);
      const newCarts = state.carts.filter((item) => item.id !== numIndex);
      var total = newCarts.reduce(function (_this, val) {
        return _this + val.total;
      }, 0);
      return {
        ...state,
        carts: newCarts,
        total: total,
        jumlah: newCarts.length,
      };
    default:
      return state;
  }
};

export default cartReducer;
