import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Borders = ({ name, path }) => {
  const [fullName, setFullName] = useState();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${name}`)
      .then((response) => response.json())
      .then((data) => setFullName(data[0].name.common));
  }, [name]);
  return (
    <Link
      className="bg-white dark:bg-primaryDark dark:text-white shadow-lg p-2 rounded min-w-[6rem]"
      to={`/REST-COUNTRIES-AP/${path}`}
    >
      {fullName}
    </Link>
  );
};

export default Borders;
