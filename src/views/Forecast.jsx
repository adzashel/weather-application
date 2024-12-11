/* eslint-disable no-undef */
import { weatherTypes } from "../constant";

const Forecast = ({ weather }) => {
  const forecastData = weather.forecast;
  
  console.log(forecastData);
  return (
    <div>
      {/* daily forecast */}
      <div className="forecast-container">
        <h2>Daily Forecast</h2>
        <div className="forecast-item-wrapper">
          {forecastData
            ? forecastData.map((item, index) => (
                <div key={index} className="forecast-item">
                  <p className="weather-temp">{item.date}</p>
                  <img
                    src={ item.day.condition.icon }
                    alt=""
                    className="weather-icon"
                  />
                  <p className="day">
                    {Math.floor(item.day.mintemp_c)}
                    °C
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
