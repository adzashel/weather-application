/* eslint-disable no-undef */
import icons from '../constant'
const Forecast = ({ weather , forecastData}) => {
  // convert epoch time to local time
  
  return (
    <div>
      {/* daily forecast */}
      <div className="forecast-container">
        <h2>24 Hours Forecast</h2>
        <div className="forecast-item-wrapper">
          {forecastData
            ? forecastData.map((item, index) => (
                <div key={index} className="forecast-item">
                  <p className="weather-temp">{ item.condition.text}</p>
                  <img
                    src={`src/icons/${weather.weatherIcon}.svg`}
                    alt=""
                    className="weather-icon"
                  />
                  <span className="day">
                    35
                    °C
                  </span>
                  <span className="days">
                    / 37C
                  </span>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
