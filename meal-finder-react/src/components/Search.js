import React, { useState } from 'react';

const Search = ({searchMeals}) => {

  const [text, setText] = useState('');

  const onChange= (e) =>{
    e.preventDefault();
    setText(e.target.value)

  }

  const onSubmit = (e) => {
    e.preventDefault()
    searchMeals(text)
    setText('')
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
        <button className='random-btn' id='random'>
          <i className='fas fa-random'></i>
        </button>
        
      </div>
     
    </div>
  );
};

export default Search;
