import React, { useContext, useEffect } from 'react';
import MealfinderContext from '../context/meal-finder/mealfinderContext';

const Meal = ({match }) => {
  const mealfinderContext = useContext(MealfinderContext);
  const { meals, meal, getMealById } = mealfinderContext;

  
  const ingredients = [];

  const {strMeal,strMealThumb,strCategory,strArea,strInstructions}  = meal

 


  useEffect(() => {
    getMealById(match.params.idMeal);

    //eslint-disable-next-line
  }, []);

 

  return (
    <div class='single-meal'>
      {console.log(meal)}
      <h1>{strMeal}</h1>
      <img src={strMealThumb} alt={meals.strMeal} />
      <div class='single-meal-info'>
        {strCategory ? `<p>${strCategory}</p>` : ''}
        {strArea ? `<p>${strArea}</p>` : ''}
      </div>
      <div class='main'>
        <p>{strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>{ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
      </div>
    </div>
  );
};

export default Meal;
