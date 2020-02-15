import React from 'react'
import MealsItem from './MealsItem'

const Meals = ({ meals}) => {
  const mealup= Object.keys(meals)
  return (


    <div >
      {Object.keys(mealup).map(meal=>(
        <MealsItem key={meal} meal={meal}/>
      ))}
    </div>
   
  );

};



export default Meals
