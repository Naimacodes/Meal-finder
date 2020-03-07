import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Meal from './Meal'

const MealsItem = ({ meal: { strMealThumb, strMeal, idMeal} }) => {
 const [showRecipe, setShowRecipe] = useState(false)
  const displayRecipe = () => {
    setShowRecipe(!showRecipe
    )
}
  return (
  
    <Fragment>
      <div className='meal' onClick={displayRecipe} >
        <img src={strMealThumb} alt={strMeal} />
        <div className='meal-info'>
          <h3>{strMeal}</h3>
        </div>
      </div>
      <Link to={`/meal/${idMeal}`} className='btn btn-dark btn-sm my-1'>
            More
          </Link>
    </Fragment>
  );
};

export default MealsItem;
