import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from '../styles/cat-Item.module.css';

const MealCat = ({ tab }) => (
  <li key={tab.id} className="container-fluid">
    <Link className={`${style.catEach} row mb-5`} to={`/meal/${tab.name}`}>
      <div className={`${style.catImg} ml-n3`}>
        <img className="" src={tab.image} alt="imgTab" />
      </div>
      <img className={style.iconPlate} src="https://img.icons8.com/ultraviolet/48/000000/meal.png" alt=".." />
      <p className={style.catHead}>{tab.name || ''}</p>
    </Link>
  </li>
);

MealCat.propTypes = {
  tab: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};


export default MealCat;
