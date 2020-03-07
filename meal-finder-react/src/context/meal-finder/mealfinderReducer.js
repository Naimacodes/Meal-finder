import {
SEARCH_MEALS,
RANDOM_MEALS,
GET_MEAL_BY_ID
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_MEALS:
      return {
        ...state,
        meals: action.payload,
      };
      case RANDOM_MEALS:
        return {
          ...state,
          meals: action.payload,
        };
        case GET_MEAL_BY_ID:
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
