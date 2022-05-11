import React from 'react';
import PropTypes from 'prop-types';

const FlightsListItem = ({ flightData: { flightDate, flightMainPhoto = 'no photo', flightName, flightNumber } }) => (
  <li key={flightNumber}>
    <div className="flightMainPhoto">{flightMainPhoto} photo</div>
    <div className="flightInfo">
      <div className="flightNumber">{flightNumber} number</div>
      <div className="flightName">{flightName} name</div>
      <div className="flightDate">{flightDate} date</div>
      <button className="buttonMore">MORE</button>
    </div>
  </li>
);

FlightsList.propTypes = {
  flightData: PropTypes.shape({
    flightDate: PropTypes.string,
    flightMainPhoto: PropTypes.string,
    flightName: PropTypes.string.isRequired,
    flightNumber: PropTypes.string,
  }),
};

export default FlightsListItem;
