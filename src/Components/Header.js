import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const setCurrentTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      return;
    }
    document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-primaryDark dark:text-white duration-200 shadow-md px-5 py-8">
      <div className="flex container mx-auto justify-between items-center">
        <h1 className="md:text-2xl  text-lg">Where in the world?</h1>
        <button onClick={setCurrentTheme} className="flex gap-3 items-center">
          <FontAwesomeIcon
            aria-label="click to toggle between light and dark mode"
            size="lg"
            transform={{ rotate: -24 }}
            icon={darkMode ? solidMoon : regularMoon}
          />
          <span className="text-lg md:text-xl">Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
