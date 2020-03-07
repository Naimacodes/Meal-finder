import {
SEARCH_MEALS,
RANDOM_MEALS,
GET_MEAL_BY_ID,
DISPLAY_RECIPE
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
            meal: action.payload,
          };
          case DISPLAY_RECIPE:
            return {
              ...state,
              showRecipe: true
            };
    default:
      return {
        ...state
      };
  }
};
