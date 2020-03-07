import React from 'react';
import MealFinderState from './context/meal-finder/MealFinderState';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/Search';
import Meals from './components/Meals';
function App() {
  return (
    <MealFinderState>
      <Router>
        <Switch>
          <div className='App'>
            <div className='container'>
              <Route>
                <Search></Search> 
                <Meals></Meals>
              </Route>
            </div>
          </div>
        </Switch>
      </Router>
    </MealFinderState>
  );
}

export default App;
