import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListCat = ({ cat }) => (
  <Link to={`category/${cat.strCategory}`}>
    <li className="category-list" key={cat.idCategory}>
      <div className="cat-list-item">
        <p className="cat-list-desc">{cat.strCategoryDescription}</p>
        <p className="cat-explore p-2 badge badge-warning">EXPLORE MORE</p>
      </div>
      <div className="cat-list-img">
        <img src={cat.strCategoryThumb} alt="imgCat" />
      </div>
      <div className="cat-list-head">
        <p>
          {' '}
          <small className="cat-list-head2">Recipe category</small>
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
