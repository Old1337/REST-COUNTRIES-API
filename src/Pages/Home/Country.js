import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  return (
    <div className="bg-white overflow-hidden dark:bg-primaryDark justify-between dark:text-white duration-200 shadow-md rounded-md flex flex-col">
      <img
        src={country.flags.svg}
        alt="country flag"
        className="h-full object-cover"
      />

      <div className="p-5 py-10 flex flex-col gap-5">
        <Link className="text-lg" to={country.cca3}>
          {country.name.common}
        </Link>

        <div className="flex flex-col gap-1">
          <p>Populatoin: {country.population.toLocaleString()}</p>
          <p>Region: {country.region}</p>
          <p>Capital :{country.capital}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
