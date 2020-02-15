import React, { useState} from 'react';
import './App.css';
import Search from './components/Search';
import Meals from './components/Meals';
import axios from 'axios';

function App() {
  const [meals, setMeals] = useState({});
  const [meal, setMeal] = useState({});

  const searchMeals = async meals => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`
    );
    console.log(res.data);
    setMeals({ meals: res.data });
  };

  const getMealById = async (mealid) => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
    setMeal({meal: res.data.meals[0]})
       
      };
  

  return (
    <div className='App'>
      <Search searchMeals={searchMeals}></Search>
      <Meals getMealById={getMealById} searchMeals={searchMeals} meals={meals} meal={meal}></Meals>
    </div>
  );
}

export default App;
