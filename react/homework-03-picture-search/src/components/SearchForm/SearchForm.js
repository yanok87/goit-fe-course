import React from 'react';
import PropTypes from 'prop-types';
import design from './SearchForm.module.css';

const SearchForm = ({ onSubmitForm, onChangeInput, inputSearch }) => {
  return (
    <form className={design.search_form} onSubmit={onSubmitForm}>
      <input
        type="text"
        value={inputSearch}
        onChange={onChangeInput}
        autoComplete="off"
        placeholder="Search images..."
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
};

export default SearchForm;
