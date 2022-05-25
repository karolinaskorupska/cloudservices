import React, { useState } from 'react';
import FlightsList from 'components/FlightsList/FlightsList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Subpage from './Subpage';
import { flights as flightsData } from 'data/flights';
import Form from 'components/Form/Form';

const initialFormState = {
  name: '',
  number: '',
  date: '',
};

const Root = () => {
  const [flights, setFlights] = useState(flightsData);
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddFlight = (e) => {
    e.preventDefault();
    const newFlight = {
      flightName: formValues.flightName,
      flightNumber: formValues.flightNumber,
      flightDate: formValues.flightDate,
    };

    setFlights([newFlight, ...flights]);
    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <Routes>
            <Route
              path="/add-flight"
              element={<Form formValues={formValues} handleAddFlight={handleAddFlight} handleInputChange={handleInputChange} />}
            />
            <Route path="/subpage" element={<Subpage />} />
            <Route path="/" element={<FlightsList />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
