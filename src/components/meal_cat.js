import React from 'react';
import { Link } from 'react-router-dom';

const MealCat = ({ tab }) => {
  return (
    <li key={tab.idMeal}>
      <Link to={`/meal/${tab.strMeal}`}>
        <img src={tab.strMealThumb} alt="imgTab" />
        <p>{tab.strMeal}</p>
      </Link>
    </li>
  )
}

export default MealCat;