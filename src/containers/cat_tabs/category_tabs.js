import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DISPLAYTABS, FILTERTABS } from '../../actions/index';
import MealCat from '../../components/meal_cat';
import SearchTabs from './searchTabs';
import Error from '../404/error-page';
import styless from '../../styles/home.module.css';
/* eslint consistent-return: "off" */

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
    fetch('https://muunchapi.herokuapp.com/api/mealsgroups')
    .then(res => res.json())
    .then(
      reslt => {
        if (!reslt) {
          setIsLoaded(true);
          setErr(true);
        } else {
          setTimeout(() => {
            displayTabs(reslt);
            setIsLoaded(true);
          }, 1200);
        }
      },

      err => {
        setIsLoaded(true);
        setErr(err);
      },
    );

    if (tabs.length > 0) {
      return setIsLoaded(true);
    }
    return setIsLoaded(false);
  }, [displayTabs, tabs.length]);

  const filterSel = () => {
    if (filter !== '' && filter.split('')[filter.length - 1] !== '\\') {
      const pattern = new RegExp(`${filter}`, 'ig');
      const filtered = tabs.filter(entry => pattern.test(entry.strMeal));
      return filtered.map(tab => <MealCat tab={tab} key={tab.id} />);
    }
    return tabs.map(tab => <MealCat tab={tab} key={tab.id} />);
  };

  if (err) {
    return (
      <Error />
    );
  } if (!isLoaded) {
    return (
      <div className={`${styless.container} container-fluid`}>
        <h3 data-testid="check-home-route">Categories</h3>
        <h3 data-testid="check-category-route">Category Section</h3>
        <img className={styless.errImg} src="https://miro.medium.com/max/978/0*cWpsf9D3g346Va20.gif" alt="" />
      </div>
    );
  }
  return (
    <div>
      <SearchTabs
        catList={styless.catList}
        filterTabs={filterTabs}
        filter={filter}
      />
      <div className={styless.slideshowContainer}>
        <div className={styless.slideText}>
          <small>coffee & dessert</small>
          <h2>
            EVERY DAY IS
            <br />
            {' '}
            TASTY.
          </h2>
        </div>
        <div className={styless.mySlides}>
          <img src="https://lovogallery.com/wp-content/uploads/2019/10/hotel_food_photography_01.jpg" alt="" />
        </div>
      </div>
      <div className={styless.mealCont}>
        <h3 data-testid="check-home-route">Categories</h3>
        <ul className={styless.catCol}>
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
