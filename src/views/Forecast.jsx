/* eslint-disable no-undef */
import clear from '../icons/clear.svg'
const Forecast = () => {
  return (
    <div>
       {/* daily forecast */}
       <div className="forecast-container">
          <h2>Daily Forecast</h2>
          <div className="forecast-item-wrapper">
            <div className="forecast-item">
              <img src={ clear } alt="" className="weather-icon" />
              <p className="day">Monday</p>
              <p className="weather-temp">25°C - 20°C</p>
            </div>
            <div className="forecast-item">
              <img src={ clear } alt="" className="weather-icon" />
              <p className="day">Tuesday</p>
              <p className="weather-temp">28°C - 22°C</p>
            </div>
            <div className="forecast-item">
              <img src={ clear } alt="" className="weather-icon" />
              <p className="day">Wednesday</p>
              <p className="weather-temp">27°C - 21°C</p>
            </div>
            <div className="forecast-item">
              <img src={ clear } alt="" className="weather-icon" />
              <p className="day">Thursday</p>
              <p className="weather-temp">27°C - 21°C</p>
            </div>
            <div className="forecast-item">
              <img src={ clear } alt="" className="weather-icon" />
              <p className="day">Friday</p>
              <p className="weather-temp">27°C - 21°C</p>
            </div>
            <div className="forecast-item">
              <img src={ clear } alt="" className="weather-icon" />
              <p className="day">Saturday</p>
              <p className="weather-temp">27°C - 21°C</p>
            </div>
            <div className="forecast-item">
              <img src={ clear } alt="" className="weather-icon" />
              <p className="day">Sunday</p>
              <p className="weather-temp">27°C - 21°C</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Forecast
