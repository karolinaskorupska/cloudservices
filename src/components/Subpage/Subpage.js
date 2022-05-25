import React from 'react';
import SubpageHeader from 'components/SubpageHeader/SubpageHeader';
import SubpageMain from 'components/SubpageMain/SubpageMain';
import { Wrapper } from './Subpage.styled';
// import { flights } from 'data/flights';
// import PropTypes from 'prop-types';

const Subpage = () => {
  return (
    <Wrapper>
      <SubpageHeader />
      <SubpageMain />
    </Wrapper>
  );
};

// Subpage.propTypes = {
//   flightData: PropTypes.shape({
//     // flightDate: PropTypes.string,
//     // flightMainPhoto: PropTypes.string,
//     // flightName: PropTypes.string.isRequired,
//     flightNumber: PropTypes.string,
//   }),
// };

export default Subpage;
