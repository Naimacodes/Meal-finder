import React from 'react';
import MealsItem from './MealsItem';

const Meals = ({ meals }) => {
  return (
    <div>
      {console.log(meals)}
      {Object.keys(meals).map(meal => (
        <MealsItem key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default Meals;
