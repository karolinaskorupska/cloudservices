import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ onChange, value, label, name, id, type = 'text' }) => {
  return (
    <>
      <p>FORM field</p>
      <label htmlFor={id}>{label}</label>
      <input name={name} id={id} type={type} value={value} onChange={onChange} />
    </>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default FormField;
