import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { DISPLAYTABS } from '../../actions/index';
import MealCat from '../../components/meal_cat';
import Search from './searchTabs';


const mapDispatchToProps = dispatch => ({
  displayTabs: tabs => dispatch(DISPLAYTABS(tabs))
})

const mapStateToProps = state => ({
  tabs: state.category,
  filter: state.filterTabs
})

const CategoryTabs = ({ match, displayTabs, tabs, filter }) => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${match.params.name}`)
      .then(res => res.json())
      .then(
        reslt => {
          setIsLoaded(true);
          displayTabs(reslt.meals);
        },

        err => {
          setIsLoaded(true);
          setErr(err);
        }
      )
  }, [match, displayTabs, tabs.length])

  const filterSel = () => {
    if (filter !== '' && filter.split('')[filter.length - 1] !== '\\') {
      const pattern = new RegExp(`^${filter}`, 'i');
      const filtered = tabs.filter(entry => pattern.test(entry.strMeal))
      return filtered.map(tab => <MealCat tab={tab} key={tab.idMeal} />);
    } else {
      return tabs.map(tab => <MealCat tab={tab} key={tab.idMeal} />);
    }
  }

  if (err) {
    return <div>Error: {Error.message} </div>;
  } else if (!isLoaded) {
    return <div>
      <h3 data-testid="check-category-route">Category Sections</h3>
      Loading...
    </div>;
  } else {
    return (
      <div>
        <Search />
        <h3>Category Sections</h3>
        <ul>
          {filterSel()}
        </ul>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryTabs);