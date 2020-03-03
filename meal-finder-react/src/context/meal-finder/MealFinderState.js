import React, { useReducer } from 'react';
import MealfinderReducer from './mealfinderReducer';
import MealfinderContext from './mealfinderContext';
import axios from 'axios';
import { SEARCH_MEALS, ON_CHANGE} from '../types';

const MealFinderState = props => {
  const initialState = {
    meals: [],
    text: ''
  };

  const [state, dispatch] = useReducer(MealfinderReducer, initialState);

  const searchMeals = async meals => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`
    );

    dispatch({
      type: SEARCH_MEALS,
      payload: res.data.meals
    });
  };

  const onChange= (e) =>{
    e.preventDefault();
    dispatch({type: ON_CHANGE,
      payload: e.target.value})

  }

  return (
    <MealfinderContext.Provider
      value={{
        meals: state.meals,
        text: state.text,
        searchMeals,
        onChange
      }}
    >
      {props.children}
    </MealfinderContext.Provider>
  );
};

export default MealFinderState;
