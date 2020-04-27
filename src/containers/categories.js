import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SHOWCATEGORIES } from '../actions/index';
import Search from './searchCats';
import ListCat from '../components/listCat';

const mapDispatchToProps = dispatch => ({
  showCats: cats => dispatch(SHOWCATEGORIES(cats)),
});

const mapStateToProps = state => ({
  cats: state.categories,
  filter: state.filterCat
});


const CategoriesList = ({ showCats, cats, filter }) => {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(
        reslt => {
          setIsLoaded(true);
          showCats(reslt.categories);
        },

        err => {
          setIsLoaded(true);
          setErr(err);
        }
      )
  }, [showCats, cats.length])

  const filterSel = () => {
    if (filter !== '' && filter.split('')[filter.length - 1] !== '\\') {
      const pattern = new RegExp(`^${filter}`, 'i');
      const filtered = cats.filter(entry => pattern.test(entry.strCategory))
      return filtered.map(cat => <ListCat cat={cat} key={cat.idCategory} />);
    } else {
      return cats.map(cat => <ListCat cat={cat} key={cat.idCategory} />);
    }
  }

  if (err) {
    return <div>Error: {Error.message} </div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Search />
        <ul>
          {filterSel()}
        </ul>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);