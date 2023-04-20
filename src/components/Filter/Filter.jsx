import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, onSearch }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={value} onChange={onSearch} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
