import React, { useContext } from 'react';
import MealsItem from './MealsItem';
import MealfinderContext from '../context/meal-finder/mealfinderContext';

const Meals = () => {
  const mealfinderContext = useContext(MealfinderContext);
  const meals = mealfinderContext;
  return (
    <div>
      {console.log(meals)}
      {meals.meals.map(meal => (
        <MealsItem key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default Meals;
