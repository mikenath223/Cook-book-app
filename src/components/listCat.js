import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from '../styles/home.module.css';

const ListCat = ({ cat }) => (
  <Link to={`category/${cat.strCategory}`}>
    <li className={style.categoryList} key={cat.idCategory}>
      <div className={style.catListItem}>
        <p className={style.catListDesc}>{cat.strCategoryDescription}</p>
        <p className={`${style.catExplore} p-2 badge badge-warning`}>EXPLORE MORE</p>
      </div>
      <div className={style.catListImg}>
        <img className={style.img} src={cat.strCategoryThumb} alt="imgCat" />
      </div>
      <div className={style.catListHead}>
        <p>
          {' '}
          <small className={style.catListHead2}>Recipe category</small>
          {' '}
          <br />
          {' '}
          {cat.strCategory}
        </p>
      </div>
    </li>
  </Link>
);

ListCat.propTypes = {
  cat: PropTypes.shape({
    strCategory: PropTypes.string.isRequired,
    idCategory: PropTypes.string.isRequired,
    strCategoryDescription: PropTypes.string.isRequired,
    strCategoryThumb: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListCat;
