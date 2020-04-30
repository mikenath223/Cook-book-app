import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DISPLAYTABS, FILTERTABS } from '../../actions/index';
import MealCat from '../../components/meal_cat';
import SearchTabs from './searchTabs';
import Error from '../404/error-page';
import style from '../../styles/catTabs.module.css';

const mapDispatchToProps = dispatch => ({
  displayTabs: tabs => dispatch(DISPLAYTABS(tabs)),
  filterTabs: word => dispatch(FILTERTABS(word)),
});

const mapStateToProps = state => ({
  tabs: state.category,
  filter: state.filterTabs,
});

const CategoryTabs = ({
  displayTabs, tabs, filter, filterTabs,
}) => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const collection = [];
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
      .then(res => res.json())
      .then(
        reslt => {
          reslt.meals.forEach(el => collection.push(el));
        },
      );
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken')
      .then(res => res.json())
      .then(
        reslt => {
          reslt.meals.forEach(el => collection.push(el));
        },
      );

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
      .then(res => res.json())
      .then(
        reslt => {
          reslt.meals.forEach(el => collection.push(el));
        },
      );

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb')
      .then(res => res.json())
      .then(
        reslt => {
          reslt.meals.forEach(el => collection.push(el));
        },
      );

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(res => res.json())
      .then(
        reslt => {
          reslt.meals.forEach(el => collection.push(el));
        },
      );

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian')
      .then(res => res.json())
      .then(
        reslt => {
          reslt.meals.forEach(el => collection.push(el));
        },
      );

    setTimeout(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter')
        .then(res => res.json())
        .then(
          reslt => {
            reslt.meals.forEach(el => collection.push(el));
            setIsLoaded(true);
            displayTabs(collection);
          },

          err => {
            setIsLoaded(true);
            setErr(err);
          },
        );
    }, 3000);
  }, [displayTabs, tabs.length]);

  const filterSel = () => {
    if (filter !== '' && filter.split('')[filter.length - 1] !== '\\') {
      const pattern = new RegExp(`^${filter}`, 'i');
      const filtered = tabs.filter(entry => pattern.test(entry.strMeal));
      return filtered.map(tab => <MealCat tab={tab} key={tab.idMeal} />);
    }
    return tabs.map(tab => <MealCat tab={tab} key={tab.idMeal} />);
  };

  if (err) {
    return (
      <Error />
    );
  } if (!isLoaded) {
    return (
      <div className="container">
        <h3 data-testid="check-home-route">Categories</h3>
        <h3 data-testid="check-category-route">Category Section</h3>
        <img className="err-img" src="https://miro.medium.com/max/978/0*cWpsf9D3g346Va20.gif" alt="" />
      </div>
    );
  }
  return (
    <div>
      <SearchTabs
        catList={style.catList}
        filterTabs={filterTabs}
        filter={filter}
      />
      <div className="slideshow-container">
        <div className="slide-text">
          <small>coffee & dessert</small>
          <h2>
            EVERY DAY IS
            <br />
            {' '}
            TASTY.
          </h2>
        </div>
        <div className="mySlides fade1">
          <img src="https://lovogallery.com/wp-content/uploads/2019/10/hotel_food_photography_01.jpg" alt="" />
        </div>
      </div>
      <div className={style.mealCont}>
        <h3 data-testid="check-home-route">Categories</h3>
        <ul className="cat-col">
          {filterSel()}
        </ul>
      </div>
    </div>
  );
};

CategoryTabs.propTypes = {
  displayTabs: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filterTabs: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoryTabs);
