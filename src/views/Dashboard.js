import React, { useContext } from 'react';
import FlightsList from 'components/FlightsList/FlightsList';
import { FlightsContext } from 'providers/FlightsProvider';

const Dashboard = () => {
  const { flights } = useContext(FlightsContext);

  return (
    <>
      <FlightsList flights={flights} />
    </>
  );
};

export default Dashboard;
