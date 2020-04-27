import { combineReducers } from 'redux';
import categories from './category';
import filterCat from './filterCat';
import category from './categoryTab';
import filterTabs from './filterTabs';
import mealTab from './mealTab';

const rootReducer = combineReducers({
  categories,
  filterCat,
  category,
  filterTabs,
  mealTab
})

export default rootReducer;