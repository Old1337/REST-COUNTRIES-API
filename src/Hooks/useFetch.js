import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          setIsLoaded(true);
          setError(true);
        }
      })
      .then((data) => {
        setData(data);
        setIsLoaded(true);
      });
  }, [url]);

  return [data, isLoaded, error];
};

export default useFetch;
