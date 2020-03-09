import React, { useState, useContext } from 'react';
import MealfinderContext from '../context/meal-finder/mealfinderContext'
import logo from '../Utilities/logo.png'

const Search = () => {

  const mealfinderContext = useContext(MealfinderContext)
  const [text, setText] = useState('');
  const [searchterm, setSearchterm] = useState('')
  const [toggle, setToggle] = useState(false)

  const onChange= (e) =>{
    e.preventDefault();
    setText(e.target.value)
    
  }

  

  const onSubmit = (e) => {
    e.preventDefault()
    if (text !== "")
   { mealfinderContext.searchMeals(text)
    setSearchterm(text)
    setText('')
    setToggle(true)}
  }
 

  const random = (e) => {
    mealfinderContext.randomMeals()
  }


  return (
    <div className='container'>
      <img src={logo} className='logo'></img>
      <div className='flex'>
        <form onSubmit={onSubmit}  className='flex'>
          <input type='text' placeholder='search for meals'  name="searchMeal" value={text} onChange={onChange} />
          <button   className='search-btn' type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form>
        <button className='random-btn' onClick={random}>
          <i className='fas fa-random'></i>
        </button>
        
      </div>
      <div>
       {toggle && <h2>SEARCH RESULT FOR {searchterm.toLocaleUpperCase()}: </h2> }
      
      </div>
    </div>
  );
};

export default Search;
