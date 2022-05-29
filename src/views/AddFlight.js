import React, { useState, useContext } from 'react';
import FormField from 'components/FormField/FormField';
import { FlightsContext } from 'providers/FlightsProvider';

const initialFormState = {
  flightName: '',
  flightNumber: '',
  flightDate: '',
};

const AddFlight = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddFlight } = useContext(FlightsContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitFlight = (e) => {
    e.preventDefault();
    handleAddFlight(formValues);
    setFormValues(initialFormState);
  };

  return (
    <form onSubmit={handleSubmitFlight}>
      <h1>Add new</h1>
      <FormField label="Name" id="flightName" name="flightName" value={formValues.flightName} onChange={handleInputChange} />
      <FormField label="Number" id="flightNumber" name="flightNumber" value={formValues.flightNumber} onChange={handleInputChange} />
      <FormField label="Date" id="flightDate" name="flightDate" value={formValues.flightDate} onChange={handleInputChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddFlight;
