import React, { useContext } from 'react';
import FlightsList from 'components/FlightsList/FlightsList';
import { FlightsContext } from 'providers/FlightsProvider';
// import { FilterContext } from 'providers/FilteredFlightsProvider';

const Dashboard = () => {
  const { flights } = useContext(FlightsContext);

  return (
    <>
      <FlightsList flights={flights} />
    </>
  );
};

export default Dashboard;

//filter is not working properly
