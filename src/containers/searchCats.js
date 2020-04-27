import React from 'react';
import { connect } from 'react-redux';
import { FILTER } from '../actions';

const mapDispatchToProps = dispatch => ({
  filter: word => dispatch(FILTER(word))
});

const handleChange = (entry, filter) => {
  filter(entry.target.value);
};

const Search = ({ filter }) => (
  <div>
    <input type="search" placeholder="Search category" data-testid="entry" onChange={e => handleChange(e, filter)} />
  </div>
)

export default connect(null, mapDispatchToProps)(Search);