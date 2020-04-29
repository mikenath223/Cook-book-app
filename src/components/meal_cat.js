import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MealCat = ({ tab }) => (
  <li key={tab.idMeal} className="container-fluid">
    <Link className="cat-each row mb-5" to={`/meal/${tab.strMeal}`}>
      <div className="cat-img ml-n3">
        <img className="" src={tab.strMealThumb} alt="imgTab" />
      </div>
      <img className="icon-plate" src="https://img.icons8.com/ultraviolet/48/000000/meal.png" alt=".." />
      <p className="cat-head">{tab.strMeal}</p>
    </Link>
  </li>
);

MealCat.propTypes = {
  tab: PropTypes.shape({
    tab: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};


export default MealCat;
