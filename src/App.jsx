import "./App.css";
import Form from "./views/Form";
import WeatherBody from "./views/WeatherBody";
import Forecast from "./views/Forecast";
import { useState } from "react";
import icons from "./constant";

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
  const [hourlyForecast, setHourlyForecast] = useState([]);

  // function to filter time that contains next 24 hours
  const filteredCombinedData = (combinedHourlyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0);
    const next24Hours = currentHour + 24 * 60 * 60 * 1000; // in milliseconds

    const next24HoursData = combinedHourlyData.filter(({ time }) => {
      const forecastTime = new Date(time).getTime();
      return forecastTime >= currentHour && forecastTime <= next24Hours;
    });
    console.log(next24HoursData);
    setHourlyForecast(next24HoursData);
  };
  // fetch api
  const handleSearch = async () => {
    setNoResults(false);
    setLoader(true);
    try {
      const data = await fetch(
        `${api.baseURL}?key=${api.key}&q=${search}&days=2`
      );
      if (!data.ok) {
        throw new Error();
      }
      const result = await data.json();
      const weatherIcon = Object.keys(icons).find((icon) =>
        icons[icon].includes(result.current.condition.code)
      );

      if (result.error) {
        console.log(result.error);
      } else {
        const name = result.location.name;
        const temperature = Math.floor(result.current.temp_c);
        const forecast = result.forecast.forecastday;
        const hourly = forecast.map((data) => {
          return data.hour;
        });
        const combinedHourlyData = [...hourly[0], ...hourly[1]];
        filteredCombinedData(combinedHourlyData);
        const desc = result.current.condition.text;

        setWeather({
          name,
          temperature,
          weatherIcon,
          desc,
          forecast,
        });
        setSearch("");
        setLoader(false);
      }
    } catch (err) {
      setNoResults(true);
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
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
              <div>
                <div className="forecast-container">
                  <h2>24 Hours Forecast</h2>
                  <div className="forecast-item-wrapper">
                    {hourlyForecast.map((hourly) => (
                      <Forecast
                        hourlyForecast={hourlyForecast}
                        key={hourly.time_epoch}
                        hourly={hourly}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
