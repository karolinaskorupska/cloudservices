import React from 'react';
import { flights } from 'data/flights';
import FlightsListItem from 'components/FlightsListItem/FlightsListItem';

const FlightsList = () => (
  <div>
    <h2>Flights List</h2>
    <ul>
      {flights.map((flightData) => (
        <FlightsListItem flightData={flightData} />
      ))}
    </ul>
  </div>
);

export default FlightsList;
