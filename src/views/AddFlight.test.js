import React from 'react';
import FormField from 'components/FormField/FormField';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import AddFlight from './AddFlight';

describe('Form Field', () => {
  it(' Renders component', () => {
    renderWithProviders(<AddFlight />);
    fireEvent.change(screen.getByTestId('flightName'), { target: { value: 'NazwaLotu' } });
    fireEvent.change(screen.getByTestId('flightNumber'), { target: { value: 'Numer Lotu' } });
    fireEvent.change(screen.getByTestId('flightDate'), { target: { value: 'data lotu' } });
    fireEvent.change(screen.getByText('Add'));
  });
});
