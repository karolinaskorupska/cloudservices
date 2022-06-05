import React, { Children } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import FlightsProvider from 'providers/FlightsProvider';

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <FlightsProvider>{children}</FlightsProvider>
    </ThemeProvider>
  );
};
