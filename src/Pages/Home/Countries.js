import React, { useState, useEffect } from "react";

//components
import Loading from "../../Components/Loading";
import Country from "./Country";
import { Search } from "./Search";

// hooks
import useFetch from "../../Hooks/useFetch";
import FilterByRegion from "./FilterByRegion";

const Countries = () => {
  const [countriesData, loaded] = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (loaded) {
      setCountries(countriesData);
    }
  }, [countriesData, loaded]);

  const [filterRegion, setFilerRegion] = useState("");

  return (
    <section>
      <div className="flex container mx-auto mb-16 px-5 md:items-center gap-10 md:flex-row justify-between flex-col">
        <Search
          countries={countriesData}
          setCountries={setCountries}
          filterRegion={filterRegion}
        />

        <FilterByRegion
          countries={countriesData}
          setCountries={setCountries}
          setFilerRegion={setFilerRegion}
        />
      </div>
      <div className="container grid gap-10 xl:grid-cols-4 md:grid-cols-2 md:gap-20  px-5 mx-auto">
        {loaded &&
          countries.map((country) => {
            return <Country key={country.name.common} country={country} />;
          })}
      </div>

      {!loaded && <Loading />}
    </section>
  );
};

export default Countries;
