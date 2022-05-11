import React from 'react';
import FlightsList from 'components/FlightsList/FlightsList';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgba(249, 249, 249, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Root = () => (
  <Wrapper>
    <FlightsList />
  </Wrapper>
);

export default Root;
