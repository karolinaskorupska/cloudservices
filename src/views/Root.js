import React from 'react';
import FlightsList from 'components/FlightsList/FlightsList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Subpage from '../components/Subpage/Subpage';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Routes>
          <Route path="/subpage" element={<Subpage />} />
          <Route path="/" element={<FlightsList />} />
        </Routes>
      </Wrapper>
    </ThemeProvider>
  </Router>
);

export default Root;
