import React from 'react';
import { flights } from 'data/flights';
import FlightsListItem from 'components/FlightsListItem/FlightsListItem';
import { Wrapper } from './FlightsList.styles';

const FlightsList = () => (
  <Wrapper>
    <h2>Flights List</h2>
    <ul>
      {flights.map((flightData, index) => (
        <FlightsListItem flightData={flightData} index={index} key={index} />
      ))}
    </ul>
  </Wrapper>
);

export default FlightsList;
