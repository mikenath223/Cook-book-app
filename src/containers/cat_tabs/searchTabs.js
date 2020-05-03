import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import stylesss from '../../styles/home.module.css';

const SearchTabs = ({
  filterTabs, filter, catList,
}) => (
  <nav className="navbar fixed-top navbar-dark bg-dark">
    <Link to="/" className="navbar-brand">
      <h2 className={stylesss.homeLink}>
        {' '}
        <span className={stylesss.yellow}>munch</span>
        It
      </h2>
    </Link>

    <form className="form-inline ml-auto">
      <label className={`${catList} input-group mx-3`} htmlFor="category">
        <div className="input-group-prepend">
          <p className="input-group-text" htmlFor="inputGroupSelect01">Meal Category</p>
        </div>
        <select name="category" value={filter} className="custom-select" id="inputGroupSelect01" onChange={e => filterTabs(e.target.value)}>
          <option value="">All Category</option>
          <option value="Beef">Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Lamb">Lamb</option>
          <option value="Seafood">Seafood</option>

        </select>
      </label>

      <div className={`${stylesss.margin} input-group`}>
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            {' '}
            <img src="https://img.icons8.com/metro/16/000000/search.png" alt="" />
          </span>
        </div>
        <input type="search" value={filter} className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" data-testid="entry" onChange={e => filterTabs(e.target.value)} />
      </div>
    </form>
  </nav>
);

SearchTabs.defaultProps = {
  filter: '',
  catList: '',
  filterTabs: () => {},
};

SearchTabs.propTypes = {
  filter: PropTypes.string,
  filterTabs: PropTypes.func,
  catList: PropTypes.string,
};


export default SearchTabs;
