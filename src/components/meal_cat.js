import React from 'react';
import { Link } from 'react-router-dom';

const MealCat = ({ tab }) => (
  <li key={tab.idMeal} className="container-fluid">
    <Link className="cat-each row mb-5" to={`/meal/${tab.strMeal}`}>
      <div className="cat-img ml-n3">
        <img className="" src={tab.strMealThumb} alt="imgTab" />
      </div>
      <img className="icon-plate" src="https://img.icons8.com/ultraviolet/48/000000/meal.png" />
      <p className="cat-head">{tab.strMeal}</p>
    </Link>
  </li>
);

export default MealCat;
