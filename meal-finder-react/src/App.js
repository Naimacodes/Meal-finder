import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Meals from './components/Meals';
import axios from 'axios';

function App() {
  const [meals, setMeals] = useState([]);

  const searchMeals = async meals => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`
    );

    setMeals(res.data.meals);
  };

  return (
    <div className='App'>
      <Search searchMeals={searchMeals} meals={meals}></Search>
      <Meals searchMeals={searchMeals} meals={meals}></Meals>
    </div>
  );
}

export default App;
