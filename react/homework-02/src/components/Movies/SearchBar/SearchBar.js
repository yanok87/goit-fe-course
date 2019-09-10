import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Movies/Movies.module.css';

const SearchBar = ({ value, onHandleInputChange }) => {
  return (
    <div>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onHandleInputChange}
      />
    </div>
  );
};

SearchBar.defaultProps = {
  value: ' ',
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onHandleInputChange: PropTypes.func.isRequired,
};

export default SearchBar;
