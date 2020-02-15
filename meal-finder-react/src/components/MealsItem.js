import React, { Fragment } from 'react';

const MealsItem = ({ meal }) => {
  return (
    <Fragment>
      <div id='result-heading'>
        <h2>Search result for:</h2>
      </div>
      <div className='meal'>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div className='meal-info'>
          <h3>${meal.strMeal}</h3>
        </div>
      </div>

      {/* <div id='meals' classNameName='meals'>{meal.strMeal}</div>
      <div id='single-meal'></div> */}
    </Fragment>
  );
};

export default MealsItem;
