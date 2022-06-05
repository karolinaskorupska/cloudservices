import React, { useState } from 'react';
import { flights as flightsData } from 'data/flights';

export const FlightsContext = React.createContext({
  flights: [],
  handleAddFlight: () => {},
});

const FlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState(flightsData);

  const handleAddFlight = (values) => {
    const newFlight = {
      flightName: values.flightName,
      flightNumber: values.flightNumber,
      flightDate: values.flightDate,
    };

    setFlights([newFlight, ...flights]);
  };
  return (
    <FlightsContext.Provider
      value={{
        flights,
        handleAddFlight,
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsProvider;
