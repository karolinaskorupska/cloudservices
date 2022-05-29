import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddFlight from 'views/AddFlight';
import Dashboard from 'views/Dashboard';
import FlightsProvider from 'providers/FlightsProvider';
import MainTemplate from 'components/templates/MainTemplate';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainTemplate>
          <FlightsProvider>
            <Wrapper>
              <Routes>
                <Route path="/add-flight" element={<AddFlight />} />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </Wrapper>
          </FlightsProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};
export default Root;
