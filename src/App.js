import Home from "./Pages/Home/Home";
import CountryDetails from "./Pages/Details/CountryDetails";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="bg-primary dark:bg-darkBg  min-h-screen">
      <Routes>
        <Route path="/REST-COUNTRIES-API" element={<Home />} />
        <Route
          path="/REST-COUNTRIES-API/:country"
          element={<CountryDetails />}
        />
      </Routes>
    </main>
  );
}

export default App;
