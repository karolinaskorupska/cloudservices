import React from 'react';
import FlightsList from 'components/FlightsList/FlightsList';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Subpage from './Subpage';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Wrapper>
      <FlightsList />
    </Wrapper>
    <Subpage />
  </ThemeProvider>
);

export default Root;
