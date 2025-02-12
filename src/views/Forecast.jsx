/* eslint-disable no-undef */
import weatherIcons from '../constant'
const Forecast = ({ hourly }) => {
  const time = hourly.time;
  const temp = Math.floor(hourly.mintemp_c)
  const weatherIcon = Object.keys(weatherIcons).find((icon) => weatherIcons[icon].includes(hourly.condition.code))
  return (
    <div  className="forecast-item">
                  <p className="weather-temp">{ time }</p>
                  <img
                    src={`src/icons/${ weatherIcon }.svg`}
                    alt=""
                    className="weather-icon"
                  />
                  <span className="day">
                    { temp }
                  </span>
                  <span className="days">
                    / 37C
                  </span>
                </div>
  );
};

export default Forecast;
