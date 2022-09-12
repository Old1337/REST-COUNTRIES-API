import React from "react";
import { useNavigate, useParams } from "react-router-dom";

// components
import Header from "../../Components/Header";
import Loading from "../../Components/Loading";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Borders from "./Borders";
import useFetch from "../../Hooks/useFetch";

const CountryDetails = () => {
  const { country } = useParams();
  const navigate = useNavigate();

  const [data, loaded, error] = useFetch(
    `https://restcountries.com/v3.1/alpha/${country}`
  );

  if (error) return navigate("-1"); // if the request page not found return to the previous page.
  return (
    <>
      <Header />
      {!loaded && <Loading />}
      {loaded && (
        <section className="container mx-auto dark:text-white px-5 py-16">
          <div className="grid gap-20">
            <button
              onClick={() => navigate(-1)}
              className="bg-white w-32 p-2 dark:bg-primaryDark dark:text-white  justify-evenly flex items-center  rounded shadow-lg"
            >
              <FontAwesomeIcon className="text-xl" icon={faArrowLeft} />
              Back
            </button>

            <div className="flex flex-col lg:flex-row gap-10 xl:gap-32">
              <img
                className="lg:w-1/2 object-cover"
                src={data[0].flags.svg}
                alt=""
              />
              <div className="flex flex-col lg:justify-center  gap-10">
                <h1 className="text-2xl">{data[0].name.common}</h1>
                <div className="flex flex-col md:flex-row l gap-10">
                  <div className="flex flex-col  gap-3">
                    <p>Native Name: {data[0].name.official}</p>
                    <p>Population: {data[0].population.toLocaleString()}</p>
                    <p>Region: {data[0].region}</p>
                    <p>Sub Region: {data[0].subregion}</p>
                    <p>Capital: {data[0].capital}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p>Top Level Domain: {data[0].tld[0]}</p>
                    <p>
                      Currencies:
                      {data[0].currencies[Object.keys(data[0].currencies)].name}
                    </p>
                    <p>
                      languages:
                      {` ${Object.entries(data[0].languages)
                        .map((language) => language[1])
                        .join(", ")}`}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg">Border Countries:</h2>
                  <div className="flex gap-3 flex-wrap text-center">
                    {data[0].borders?.map((border) => {
                      return (
                        <Borders key={border} name={border} path={border} />
                      );
                    })}
                    {!data[0].borders && <span>No Countries</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CountryDetails;
