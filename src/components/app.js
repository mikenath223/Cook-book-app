import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoriesList from '../containers/categories';
import CategoryTabs from '../containers/cat_tabs/category_tabs';
import MealTab from '../containers/meal_tab/meal_tab';
import Error from '../containers/404/error-page';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={CategoriesList} />
      <Route path="/category/:name" exact component={CategoryTabs} />
      <Route path="/meal/:dish" component={MealTab} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default App;
