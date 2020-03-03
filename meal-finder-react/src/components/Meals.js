import React, { useContext } from 'react';
import MealsItem from './MealsItem';
import MealfinderContext from '../context/meal-finder/mealfinderContext';

const Meals = () => {
  const mealfinderContext = useContext(MealfinderContext);
  const meals = mealfinderContext;
  return (
    <div className='meals'>
      {meals.meals !== null &&
        meals.meals.map(meal => <MealsItem key={meal.idMeal} meal={meal} />)}

      {meals.meals === null &&
        <h3>Sorry, we did not find any recipes. Try something else! </h3>}
    </div>
  );
};

export default Meals;
