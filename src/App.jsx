import "./App.css";
import Form from "./views/Form";
import WeatherBody from "./views/WeatherBody";
import Forecast from "./views/Forecast";
import { useState } from "react";
import clear from './icons/clear.svg';
import icons from './constant'

import NoResult from "./views/NoResult";

const api = {
  key: "766b389336c246ab9b5141950241012",
  baseURL: "https://api.weatherapi.com/v1/forecast.json",
};

const App = () => {
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);

  // fetch api
  const handleSearch = async () => {
    setNoResults(false);
    setLoader(true);
    try {
      const data = await fetch(
        `${api.baseURL}?key=${api.key}&q=${search}&days=7`
      );
      if (!data.ok) {
        throw new Error();
      }
      const result = await data.json();
      // icon
      const weatheIcon = icons[result.current.condition.code] || clear;

      if (result.error) {
        console.log(result.error);
      } else {
        const name = result.location.name;
        const temperature = Math.floor(result.current.temp_c);
        const forecast = result.forecast.forecastday;
        const desc = result.current.condition.text;
        const icon  = weatheIcon;
        setWeather({
          name,
          temperature,
          desc,
          icon,
          forecast,
        });
        setSearch("");
        setLoader(false);
      }
    } catch {
      setNoResults(true);
    }
  };

  return (
    <>
      <div className="container">
        <Form
          search={search}
          setSearch={setSearch}
          onHandleSearch={handleSearch}
        />
        {noResults ? (
          <NoResult search={search} />
        ) : (
          <>
            {loader ? (
              <div className="loading">
                <div className="loader"></div>
                Loading...
              </div>
            ) : (
              <WeatherBody weather={weather} />
            )}
            <Forecast weather={weather} />
          </>
        )}
      </div>
    </>
  );
};

export default App;
