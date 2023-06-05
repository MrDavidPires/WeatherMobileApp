import { useEffect, useState } from "react";
const API_KEY = "85eb17b0ab5d4543aa9101601232004";

export default function useData(search) {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setWeather(await getData(search));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [search]);
  return {
    loading,
    weather,
    error,
  };
}

const URL = (search) =>
  `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search}&days=1&aqi=no&alerts=no`;

async function getData(search) {
  const url = URL(search);

  let res = await fetch(url);
  let data = await res.json();

  return data;
}
