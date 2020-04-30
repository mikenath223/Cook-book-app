import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const SearchTabs = ({
  filterTabs, filter, catList,
}) => {
  const handleChange = entry => {
    filterTabs(entry.target.value);
  };

  const handleSelectCat = entry => {
    filterTabs(entry.target.value);
  };

  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <Link to="/">
        <h2 className="navbar-brand home-link">
          {' '}
          <span className="yellow">munch</span>
          It
        </h2>
      </Link>
      <form className="form-inline">
        <label className={`${catList} input-group mx-3`} htmlFor="category">
          <div className="input-group-prepend">
            <p className="input-group-text" htmlFor="inputGroupSelect01">Choose Meal Category</p>
          </div>
          <select name="category" className="custom-select" id="inputGroupSelect01" onChange={e => handleSelectCat(e)}>
            <option value="">All Category</option>
            <option value="Beef">Beef</option>
            <option value="Chicken">Chicken</option>
            <option value="Dessert">Dessert</option>
            <option value="Lamb">Lamb</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Seafood">Seafood</option>
            <option value="Starter">Starter</option>

          </select>
        </label>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              {' '}
              <img src="https://img.icons8.com/metro/16/000000/search.png" alt="" />
            </span>
          </div>
          <input type="search" value={filter} className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" data-testid="entry" onChange={e => handleChange(e)} />
        </div>
      </form>
    </nav>
  );
};

SearchTabs.defaultProps = {
  filter: '',
  catList: '',
};

SearchTabs.propTypes = {
  filter: PropTypes.string,
  filterTabs: PropTypes.func.isRequired,
  catList: PropTypes.string,
};


export default SearchTabs;
