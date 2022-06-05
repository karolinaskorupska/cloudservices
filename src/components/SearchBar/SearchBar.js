import React, { useContext, useState } from 'react';
import SearchField from 'components/SearchField/SearchField';
import { FilterContext } from 'providers/FilteredFlightsProvider';
import { SearchForm, SearchButton, CustomSelect } from './SearchBar.styled';

const initialSearchState = {
  flightName: '',
  flightNumber: '',
  flightDate: '',
};

const SearchBar = () => {
  const [searchValues, setSearchValues] = useState(initialSearchState);
  const { handleFilter } = useContext(FilterContext);

  const handleChange = (e) => {
    setSearchValues({
      ...searchValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    handleFilter();
    setSearchValues(initialSearchState);
    console.log('guzik dziala');
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch}>
        <SearchField
          label="nazwa Lotu"
          id="flightName"
          name="flightName"
          value={searchValues.flightName}
          onChange={handleChange}
          placeholder="Wpisz Nazwę"
        />
        <SearchField
          label="data Lotu"
          id="flightDate"
          name="flightDate"
          value={searchValues.flightDate}
          onChange={handleChange}
          placeholder="RRRR/MM/DD - RRRR/MM/DD"
        />
        <CustomSelect></CustomSelect> pokaż tylko udane loty
        <SearchButton type="submit">Szukaj</SearchButton>
      </SearchForm>
      {/* <button>Pokaz tylko udane loty</button> */}
    </>
  );
};

export default SearchBar;
