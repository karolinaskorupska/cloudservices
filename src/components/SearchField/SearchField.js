import React from 'react';
import PropTypes from 'prop-types';
import { SearchFieldStyled, Input, Label } from 'components/SearchField/SearchField.styled';

const SearchField = ({ onChange, value, label, name, id, type = 'text', placeholder }) => {
  return (
    <SearchFieldStyled>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </SearchFieldStyled>
  );
};

SearchField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SearchField;
