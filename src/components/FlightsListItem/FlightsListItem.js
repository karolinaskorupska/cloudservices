import React from 'react';
import PropTypes from 'prop-types';
import { Element, FlightMainPhoto, FlightInfo, FlightNumber, FlightName } from './FlightsListItem.styled';
import ButtonMore from 'components/buttons/ButtonMore';

const showIndex = (index) => alert(`This is a flight nr #${index + 1}`);

const FlightsListItem = ({ index, flightData: { flightDate, flightMainPhoto = 'no photo', flightName, flightNumber } }) => (
  <Element className="flightsListElement" key={flightNumber}>
    <FlightMainPhoto className="flightMainPhoto">{flightMainPhoto} photo</FlightMainPhoto>
    <FlightInfo className="flightInfo">
      <FlightNumber className="flightNumber">{flightNumber} number</FlightNumber>
      <FlightName className="flightName">{flightName} name</FlightName>
      <div className="flightDate">{flightDate} date</div>
      <ButtonMore onClick={() => showIndex(index)} />
    </FlightInfo>
  </Element>
);

FlightsListItem.propTypes = {
  flightData: PropTypes.shape({
    flightDate: PropTypes.string,
    flightMainPhoto: PropTypes.string,
    flightName: PropTypes.string.isRequired,
    flightNumber: PropTypes.string,
  }),
};

export default FlightsListItem;
