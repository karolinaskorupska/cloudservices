import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/FormField/FormField';
import { FlightShape } from 'types';
import { ViewWrapper } from 'components/VievWrapper/ViewWrapper';

const AddFlight = ({ handleAddFlight, formValues, handleInputChange }) => {
  return (
    <ViewWrapper as="form" onSubmit={handleAddFlight}>
      <h2>Add Custom Flight</h2>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Number" id="number" name="number" value={formValues.number} onChange={handleInputChange} />
      <FormField label="Date" id="date" name="date" value={formValues.date} onChange={handleInputChange} />
      <button type="submit">Add</button>
    </ViewWrapper>
  );
};

AddFlight.propTypes = {
  handleAddUser: PropTypes.func,
  formValues: PropTypes.shape(FlightShape),
  handleInputChange: PropTypes.func,
};

export default AddFlight;
