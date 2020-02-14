import React, { useState } from 'react';

const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState('');

  const onChange= (e) =>{
    e.preventDefault();
    setSearchTerm(e.target.value)

  }

  const onSubmit = (e) => {
    e.preventDefault()
    this.props.searchMeal(searchTerm)
    setSearchTerm('')
  }



  return (
    <div className='container'>
      <h1>Meal Finder</h1>
      <div className='flex'>
        <form id='submit' className='flex'>
          <input type='text' placeholder='search for meals' id='search' name="searchMeal" value={searchTerm} onChange={onChange} />
          <button onSubmit={onSubmit} className='search-btn' type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form>
        <button className='random-btn' id='random'>
          <i className='fas fa-random'></i>
        </button>
      </div>
      <div id='result-heading'></div>
      <div id='meals' className='meals'></div>
      <div id='single-meal'></div>
    </div>
  );
};

export default Search;
