import React from 'react';
import PropTypes from 'prop-types';
import { SearchFieldStyled } from 'components/SearchField/SearchField.styled';

const SearchField = ({ onChange, value, label, name, id, type = 'text' }) => {
  return (
    <SearchFieldStyled>
      <label htmlFor={id}>{label}</label>
      <input name={name} id={id} type={type} value={value} onChange={onChange} />
    </SearchFieldStyled>
  );
};

SearchField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default SearchField;
