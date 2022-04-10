import { SHOW_ALL, SHOW_TOP_LIMIT, SHOW_DETAIL } from "../types/productTypes";

const initialState = {
  products: [],
  top_products: [],
  detail: {},
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ALL:
      return {
        ...state,
        products: payload.json,
      };
    case SHOW_TOP_LIMIT:
      return {
        ...state,
        top_products: payload.json,
      };
    case SHOW_DETAIL:
      return {
        ...state,
        detail: payload.json,
      };
    default:
      return state;
  }
};

export default productReducer;
