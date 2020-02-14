import React from 'react'
import MealsItem from './MealsItem'

const Meals = ({meals})  => {
  return (
   
    <div style={mealsStyle}>
    {meals.map(meal=>
      <MealsItem key={meal.id} meal={meal}/>)}
  </div>
    
  )
}

const mealsStyle={
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)"
}
export default Meals
