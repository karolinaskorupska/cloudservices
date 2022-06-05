import React from 'react';
import FlightsListItem from 'components/FlightsListItem/FlightsListItem';
import { Wrapper } from './FlightsList.styles';
import PropTypes from 'prop-types';
import { FlightShape } from 'types';

const FlightsList = ({ flights }) => (
  <Wrapper>
    <ul>
      {flights.map((flightData, index) => (
        <FlightsListItem flightData={flightData} index={index} key={index} />
      ))}
    </ul>
  </Wrapper>
);

FlightsList.propTypes = {
  flightData: PropTypes.arrayOf(PropTypes.shape(FlightShape)),
};

export default FlightsList;
