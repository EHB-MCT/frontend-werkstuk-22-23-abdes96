import { useState, useEffect } from "react";

export default function useEgypt() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch("https://restcountries.com/v3.1/name/egypt")
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);


  return { data, loading, error };
}