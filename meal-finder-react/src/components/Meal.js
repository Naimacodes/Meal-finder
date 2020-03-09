import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom'
import MealfinderContext from '../context/meal-finder/mealfinderContext';

const Meal = ({ match }) => {
  const mealfinderContext = useContext(MealfinderContext);
  const { meals, meal, getMealById } = mealfinderContext;


  useEffect(() => {
    getMealById(match.params.idMeal);
    //eslint-disable-next-line
  }, []);

  const { strMeal, strMealThumb, strCategory, strArea, strInstructions } = meal;

  const addIngredients = meal => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (`${meal[`strIngredient${i}`]}`) {
        const pair = {
          ingredient: `${meal[`strIngredient${i}`]}`,
          measure: `${meal[`strMeasure${i}`]}`
        };
        ingredients.push(pair);
      } else {
        // console.log(22)
        break;
      }
    }

    return ingredients;
  };
  const food = [];
  if (meal !== null) {
    food.push(addIngredients(meal));
  }
  console.log(food);
  return (
    <div className='single-meal'>
      {console.log(meal)}
      <h1>{strMeal}</h1>
      <img src={strMealThumb} alt={meals.strMeal} />
      <div className='single-meal-info'>
        {strCategory ? <p>{strCategory}</p> : ''}
        {strArea ? <p>{strArea}</p> : ''}
      </div>
      <div className='main'>
        <p>{strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          {food[0].map(ing => 
           ing.ingredient !== 'null' && <li>{ing.ingredient} - {ing.measure}</li>
          )}
        </ul>
      </div>
      <button className="search-btn"> <Link to='/' style={{textDecoration: 'none'}}>Go back</Link></button>
    </div>
    
  );
};

export default Meal;
