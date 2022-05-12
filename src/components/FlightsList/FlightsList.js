import React from 'react';
import { flights } from 'data/flights';
import FlightsListItem from 'components/FlightsListItem/FlightsListItem';
import { Wrapper } from './FlightsList.styles';

const FlightsList = () => (
  <Wrapper>
    <h2>Flights List</h2>
    <ul>
      {flights.map((flightData) => (
        <FlightsListItem flightData={flightData} />
      ))}
    </ul>
  </Wrapper>
);

export default FlightsList;
