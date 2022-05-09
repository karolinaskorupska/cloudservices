import React from 'react';
import { flights } from 'data/flights';
import PropTypes from 'prop-types';
console.log(flights);

const FlightsList = () => (
  <div>
    <h2>Flights List</h2>
    <ul>
      {flights.map(({ flightMainPhoto, flightNumber, flightName, flightDate, flightDetails }) => (
        <li key={flightNumber}>
          <div className="flightMainPhoto">{flightMainPhoto} photo</div>
          <div className="flightInfo">
            <div className="flightNumber">{flightNumber} number</div>
            <div className="flightName">{flightName} name</div>
            <div className="flightDate">{flightDate} date</div>
            <button className="buttonMore">MORE</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

FlightsList.propTypes = {};

export default FlightsList;
