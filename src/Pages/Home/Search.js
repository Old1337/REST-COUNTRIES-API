import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Search = ({ countries, setCountries, filterRegion }) => {
  const handleSearch = (e) => {
    // if the filter region is set search through the selected region otherwise search through all countries.

    let filteredCountries;
    filteredCountries = countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .startsWith(e.target.value.toLowerCase().trim())
    );
    if (filterRegion) {
      filteredCountries = countries.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .startsWith(e.target.value.toLowerCase().trim()) &&
          country.region === filterRegion
      );
    }
    setCountries(filteredCountries);
  };

  return (
    <div className="relative rounded-lg">
      <input
        onChange={handleSearch}
        className="bg-white shadow-md md:w-[32rem] dark:placeholder:text-white  dark:text-white dark:bg-primaryDark placeholder:font-sans placeholder:text-gray-400 w-full  p-4 pl-20 rounded"
        type="text"
        placeholder="Search for a country..."
      />
      <FontAwesomeIcon
        className="absolute left-7 top-1/2 dark:text-white -translate-y-1/2 text-xl text-gray-400"
        icon={faMagnifyingGlass}
      />
    </div>
  );
};
