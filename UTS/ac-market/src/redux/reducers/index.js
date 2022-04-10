import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import transactionReducer from "./transactionReducer";

export default combineReducers({
  products_state: productReducer,
  carts_state: cartReducer,
  transactions_state: transactionReducer,
});
