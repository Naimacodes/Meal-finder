import React, { Fragment, useContext } from 'react';
import MealfinderContext from '../context/meal-finder/mealfinderContext';
import { Link } from 'react-router-dom';

const MealsItem = ({ meal: { strMealThumb, strMeal, idMeal } }) => {
  const mealfinderContext = useContext(MealfinderContext);
  const { displayRecipe, showRecipe } = mealfinderContext;
  console.log(showRecipe);
  return (
    <Fragment>
      <div className='meal' onClick={displayRecipe}>
        <img src={strMealThumb} alt={strMeal} />
        <div className='meal-info'>
          <h3>{strMeal}</h3>
        </div>
        {console.log(showRecipe)}
        {showRecipe && (
          <Link to={`/meal/${idMeal}`}>
            <div className='meal-info'>
              <h3>{strMeal}</h3>
            </div>
          </Link>
        )}
      </div>
    </Fragment>
  );
};

export default MealsItem;
