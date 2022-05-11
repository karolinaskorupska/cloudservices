import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// const LargeDispayWidth = '1160px';
// const PortraitTabletWidth = '728px';
// const LandscapePhoneWidth = '440px';

const Element = styled.li`
  background-color: rgba(255, 255, 255, 1);
  background-color: pink;
  width: 1160px;
  height: 255px;
  background: inherit;
  background-color: inherit;
  border: none;
  border-radius: 20px;
  -moz-box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.349019607843137);
  -webkit-box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.349019607843137);
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.349019607843137);
  margin: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FlightsListItem = ({ flightData: { flightDate, flightMainPhoto = 'no photo', flightName, flightNumber } }) => (
  <Element className="flightsListElement" key={flightNumber}>
    <div className="flightMainPhoto">{flightMainPhoto} photo</div>
    <div className="flightInfo">
      <div className="flightNumber">{flightNumber} number</div>
      <div className="flightName">{flightName} name</div>
      <div className="flightDate">{flightDate} date</div>
      <button className="buttonMore">MORE</button>
    </div>
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
