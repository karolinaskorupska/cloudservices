import React from 'react';
import FormField from 'components/FormField/FormField';

const Form = ({ handleAddFlight, formValues, handleInputChange }) => {
  return (
    <>
      <form onSubmit={handleAddFlight}>
        <h2>Add new flight</h2>
        <FormField label="Name" id="flightName" name="flightName" value={formValues.flightName} onChange={handleInputChange} />
        <FormField label="number" id="flightNumber" name="flightNumber" value={formValues.flighNumber} onChange={handleInputChange} />
        <FormField label="Date" id="flightDate" name="flightDate" value={formValues.flightDate} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Form;
