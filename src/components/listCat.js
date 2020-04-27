import React from 'react';
import { Link } from 'react-router-dom';

const ListCat = ({ cat }) => {
  return (
    <li key={cat.idCategory}>
      <Link to={`category/${cat.strCategory}`}>
        <p>{cat.strCategory}</p>
        <img src={cat.strCategoryThumb} alt="imgCat" />
        <p>{cat.strCategoryDescription}</p>
      </Link>
    </li>
  )
}

export default ListCat;