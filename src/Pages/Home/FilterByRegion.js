import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const FilterByRegion = ({ countries, setCountries, setFilerRegion }) => {
  const handleRegion = (e) => {
    const FilteredCountriesByRegion = countries.filter(
      (country) => country.region === e.target.value
    );
    setCountries(FilteredCountriesByRegion);
    setFilerRegion(e.target.value);
  };

  return (
    <div className="md:w-1/5 w-1/2 relative">
      <select
        onChange={handleRegion}
        defaultValue={"DEFAULT"}
        className="bg-white shadow-md  px-6 p-4 dark:bg-primaryDark  dark:text-white  font-sans rounded border-none outline-none appearance-none w-full"
        name="plan"
      >
        <option value="DEFAULT" disabled hidden>
          Filter by Region
        </option>
        <option className="border-none" value="Africa">
          Africa
        </option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <FontAwesomeIcon
        className="absolute right-6 top-1/2 dark:text-white -translate-y-1/2 text-md "
        icon={faAngleDown}
      />
    </div>
  );
};

export default FilterByRegion;
