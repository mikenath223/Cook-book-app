import React from 'react';
import { connect } from 'react-redux';
import { FILTER } from '../actions';
import { Link } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  filter: word => dispatch(FILTER(word))
});

const handleChange = (entry, filter) => {
  filter(entry.target.value);
};

const Search = ({ filter }) => (
  <nav className="navbar fixed-top navbar-dark bg-dark">
    <Link to={'/'}><h2 className="navbar-brand home-link"> <span className="yellow">munch</span>It</h2></Link>
    <form className="form-inline">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1"> <img src="https://img.icons8.com/metro/16/000000/search.png" alt="" /></span>
        </div>
        <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" data-testid="entry" onChange={e => handleChange(e, filter)} />
      </div>
    </form>
  </nav>

)

export default connect(null, mapDispatchToProps)(Search);