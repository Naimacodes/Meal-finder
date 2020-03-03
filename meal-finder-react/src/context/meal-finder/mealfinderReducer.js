import {
SEARCH_MEALS,
ON_CHANGE
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_MEALS:
      return {
        ...state,
        meals: action.payload,
      };
      case ON_CHANGE:
        return {
          ...state,
          text: action.payload,
        };
    default:
      return {
        ...state
      };
  }
};
