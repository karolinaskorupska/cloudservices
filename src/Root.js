import React from 'react';
import FlightsList from 'components/FlightsList/FlightsList';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bkgColor});
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Wrapper>
      <FlightsList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
