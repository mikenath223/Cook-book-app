import React from 'react';
import { Link } from 'react-router-dom';

const MealCat = ({ tab }) => {
  return (
    <li key={tab.idMeal} className="container-fluid">
      <Link className="cat-each row mb-5" to={`/meal/${tab.strMeal}`}>
        <div className="cat-img ml-n3">
          <img className="" src={tab.strMealThumb} alt="imgTab" />
        </div>
        <p className="cat-head">{tab.strMeal}</p>
      </Link>
    </li>
  )
}

export default MealCat;