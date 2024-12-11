/* eslint-disable no-undef */
import { weatherTypes } from "../constant";
import clear from "../icons/clear.svg";
const Forecast = ({ weather }) => {
  const forecastData = weather.forecast;
  console.log(forecastData);
  return (
    <div>
      {/* daily forecast */}
      <div className="forecast-container">
        <h2>Daily Forecast</h2>
        <div className="forecast-item-wrapper">
         { forecastData ? (
           forecastData.map((item, index) => (
             <div key={index} className="forecast-item">
               <img src={`/src/icons/${ weather.weatherIcon}.svg`} alt="" className="weather-icon" />
               <p className="day">{ Math.floor(item.day.mintemp_c)}
                °C</p>
               <p className="weather-temp">{item.date}</p>
             </div>
           ))
         ) : null }
        </div>
      </div>
    </div>
  );
};

export default Forecast;
