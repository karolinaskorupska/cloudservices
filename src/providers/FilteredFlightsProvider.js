import React, { useState } from 'react';
import { flights as flightsData } from 'data/flights';

export const FilterContext = React.createContext({
  flights: [],
  handleFilter: () => {},
});

const FilteredFlightsProvider = ({ children }) => {
  const [flights, setFlights] = useState(flightsData);

  const handleFilter = (values) => {
    console.log('filter dziala');

    flightsData.filter((element) => {
      if (values === '') {
        return element;
      } else {
        return element.text.includes(values);
      }
    });
  };

  return (
    <FilterContext.Provider
      value={{
        flights,
        handleFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilteredFlightsProvider;
