import React from 'react';
import { flights } from 'data/flights';
import FlightsListItem from 'components/FlightsListItem/FlightsListItem';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bkgColor});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

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
