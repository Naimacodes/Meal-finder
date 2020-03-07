import React, { Fragment } from 'react';
import MealFinderState from './context/meal-finder/MealFinderState';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/Search';
import Meals from './components/Meals';
import Meal from './components/Meal';
function App() {
  return (
    <MealFinderState>
      <Router>
        <Switch>
          <div className='App'>
            <div className='container'>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search></Search>
                    <Meals></Meals>
                  </Fragment>
                )}
              ></Route>
              <Route
                exact
                path='/meal/:idMeal'
                render={props => (
                  <Fragment>
                    <Search></Search>
                    <Meal {...props} />
                  </Fragment>
                )}
              ></Route>
            </div>
          </div>
        </Switch>
      </Router>
    </MealFinderState>
  );
}

export default App;
