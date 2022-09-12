import React from "react";

import Header from "../../Components/Header";
import Countries from "./Countries";

const Home = () => {
  return (
    <>
      <Header />
      <main className="mt-20">
        <Countries />
      </main>
    </>
  );
};

export default Home;
