import React, { useContext, useEffect, useState } from 'react';
import FlightsList from 'components/FlightsList/FlightsList';
// import { FlightsContext } from 'providers/FlightsProvider';
// import { FilterContext } from 'providers/FilteredFlightsProvider';
import axios from 'axios';

const Dashboard = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/v4/launches')
      .then((data) => {
        console.log(data.data);
        setFlights(data.data);
      })
      .catch((err) => console.log(err));

    // const { flights } = useContext(FlightsContext);
  });

  return (
    <>
      <FlightsList flights={flights} />
    </>
  );
};

export default Dashboard;

//filter is not working properly
