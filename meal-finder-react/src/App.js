import React from 'react';
import MealFinderState from './context/meal-finder/MealFinderState';
import './App.css';
import Search from './components/Search';
import Meals from './components/Meals';
function App() {
  return (
    <MealFinderState>
      <div className='App'>
        <div className='container'>
          <Search></Search>
          <Meals></Meals>
        </div>
      </div>
    </MealFinderState>
  );
}

export default App;
