import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from '../styles/cat-Item.module.css';

const MealCat = ({ tab }) => (
  <li key={tab.idMeal} className="container-fluid">
    <Link className={`${style.catEach} row mb-5`} to={`/meal/${tab.strMeal || ''}`}>
      <div className={`${style.catImg} ml-n3`}>
        <img className="" src={tab.strMealThumb} alt="imgTab" />
      </div>
      <img className={style.iconPlate} src="https://img.icons8.com/ultraviolet/48/000000/meal.png" alt=".." />
      <p className={style.catHead}>{tab.strMeal || ''}</p>
    </Link>
  </li>
);

MealCat.propTypes = {
  tab: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
  }).isRequired,
};


export default MealCat;
