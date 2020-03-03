import {
SEARCH_MEALS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_MEALS:
      return {
        ...state,
        meals: action.payload,
      };
    default:
      return {
        ...state
      };
  }
};
