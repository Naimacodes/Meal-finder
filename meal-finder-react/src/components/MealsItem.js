import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';


const MealsItem = ({ meal: { strMealThumb, strMeal, idMeal } }) => {
  const [showRecipe, setShowRecipe] = useState(false);
  const displayRecipe = () => {
    setShowRecipe(!showRecipe);
  };
  return (
    <Fragment>
      <div className='meal' onClick={displayRecipe}>
        <img src={strMealThumb} alt={strMeal} />
        <div className='meal-info'>
              <h3>{strMeal}</h3>
            </div>
        
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
