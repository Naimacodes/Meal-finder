import React, {useState, Fragment} from 'react';
import './App.css';
import Search from './components/Search';
import Meals from './components/Meals'
import axios from 'axios'

function App() {

  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState({});



  const searchMeals = async searchTerm => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    setMeals({meals:res.data});
  };
  return (
    <div className='App'>
      <Search searchMeals={searchMeals} ></Search>
      <Meals meals={meals}></Meals>
    </div>
  );
}

export default App;
