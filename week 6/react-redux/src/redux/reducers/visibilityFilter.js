import { SET_VISIBILITY_FILTER } from "../actions/actionsTypes";
import { VISIBILITY_FILTER } from "../../constants/global";

const initialState = VISIBILITY_FILTER.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
