import React from 'react';
import PropTypes from 'prop-types';
import { Element, FlightMainPhoto, FlightInfo, FlightNumber, FlightName } from './FlightsListItem.styled';
import ButtonMore from 'components/buttons/ButtonMore';

const FlightsListItem = ({ index, flightData }) => {
  const flightName = flightData.name;
  const flightDate = flightData.static_fire_date_utc;
  const flightNumber = flightData.flight_number;
  const flightMainPhoto = flightData.links.flickr.original[0];

  return (
    <Element className="flightsListElement" key={flightName}>
      <FlightMainPhoto className="flightMainPhoto">
        <img src={flightMainPhoto} alt="main photo" />
      </FlightMainPhoto>
      <FlightInfo className="flightInfo">
        <FlightNumber className="flightNumber">{flightNumber}</FlightNumber>
        <FlightName className="flightName">{flightName}</FlightName>
        <div className="flightDate">{flightDate}</div>
        <ButtonMore />
      </FlightInfo>
    </Element>
  );
};

FlightsListItem.propTypes = {
  flightData: PropTypes.shape({
    flightDate: PropTypes.string,
    flightMainPhoto: PropTypes.string,
    flightName: PropTypes.string,
    flightNumber: PropTypes.string,
  }),
};

export default FlightsListItem;
