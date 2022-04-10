import {
  CHECKOUT_ALL,
  SHOW_ALL,
  SINGLE_CHECKOUT,
} from "../types/transactionTypes";

const initialState = {
  transactions: [],
  jumlah: 0,
};

const transactionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ALL:
      return {
        ...state,
        transactions: payload.result,
        jumlah: payload.jumlah,
      };
    case SINGLE_CHECKOUT:
      return {
        ...state,
        transactions: [...state.transactions, payload],
      };
    case CHECKOUT_ALL:
    default:
      return state;
  }
};

export default transactionReducer;
