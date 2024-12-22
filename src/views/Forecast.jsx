/* eslint-disable no-undef */
const Forecast = ({ weather }) => {
  const forecastData = weather.forecast;
  console.log(forecastData);
  return (
    <div>
      {/* daily forecast */}
      <div className="forecast-container">
        <h2>Forecast for 7 Days</h2>
        <div className="forecast-item-wrapper">
          {forecastData
            ? forecastData.map((item, index) => (
                <div key={index} className="forecast-item">
                  <p className="weather-temp">{item.date}</p>
                  <img
                    src={item.day.condition.icon}
                    alt=""
                    className="weather-icon"
                  />
                  <span className="day">
                    {Math.floor(item.day.mintemp_c)}
                    °C
                  </span>
                  <span className="days">
                    / {Math.floor(item.day.maxtemp_c)}C
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
