import React from 'react';
import { connect } from 'react-redux';
import { FILTERTABS } from '../../actions';

const mapDispatchToProps = dispatch => ({
  filter: word => dispatch(FILTERTABS(word))
});

const handleChange = (entry, filter) => {
  filter(entry.target.value);
};

const SearchTabs = ({ filter }) => (
  <div>
    <input type="search" placeholder="Search category" onChange={e => handleChange(e, filter)} />
  </div>
)

export default connect(null, mapDispatchToProps)(SearchTabs);