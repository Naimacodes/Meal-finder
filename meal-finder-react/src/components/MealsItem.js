import React, { Fragment} from 'react';


const MealsItem = ({ meal : {strMealThumb, strMeal}}) => {

  
  return (
    <Fragment>
      

      <div className='meal'>
        <img src={strMealThumb} alt={strMeal} />
        <div className='meal-info'>
          <h3>{strMeal}</h3>
        </div>
      </div>
    </Fragment>
  );
};




export default MealsItem;
