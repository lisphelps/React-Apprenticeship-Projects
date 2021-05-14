import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setIsLoading(false);
      } catch (e) {
        setIsError(e);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, setData, setIsLoading, setIsError]);

  return { data, isLoading, isError };
}

export default useFetch;
