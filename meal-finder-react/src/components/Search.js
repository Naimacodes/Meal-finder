import React, { useState, useContext } from 'react';
import MealfinderContext from '../context/meal-finder/mealfinderContext'

const Search = () => {

  const mealfinderContext = useContext(MealfinderContext)
  const [text, setText] = useState('');
  const [searchterm, setSearchterm] = useState('')

  const onChange= (e) =>{
    e.preventDefault();
    setText(e.target.value)
    
  }

  

  const onSubmit = (e) => {
    e.preventDefault()
    mealfinderContext.searchMeals(text)
    setSearchterm(text)
    setText('')
  }
 

  const random = (e) => {
    mealfinderContext.randomMeals()
  }


  return (
    <div className='container'>
      <h1>Meal Finder</h1>
      <div className='flex'>
        <form onSubmit={onSubmit}  id='submit' className='flex'>
          <input type='text' placeholder='search for meals' id='search' name="searchMeal" value={text} onChange={onChange} />
          <button   className='search-btn' type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form>
        <button className='random-btn' onClick={random} id='random'>
          <i className='fas fa-random'></i>
        </button>
        
      </div>
      <div id='result-heading'>
       <h2>Search result for {searchterm}: </h2>
      </div>
    </div>
  );
};

export default Search;
