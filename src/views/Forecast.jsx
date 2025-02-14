/* eslint-disable no-undef */
import weatherIcons from '../constant'
import nightIcons from '../icons'
const Forecast = ({ hourly }) => {
  const dayOrNot = hourly.is_day;
  const temp = Math.floor(hourly.temp_c)
  const feelsLike = Math.floor(hourly.feelslike_c);
  const weatherIcon = Object.keys(weatherIcons).find((icon) => weatherIcons[icon].includes(hourly.condition.code));
  const nightIcon = Object.keys(nightIcons).find((icon) => nightIcons[icon].includes(hourly.condition.code));

  // convert time epoch to 12 hours format
  const convertTimeEpoch = (timeEpoch , format24 = true ) => {

    // create date object
    const date = new Date(timeEpoch * 1000);

    // get hours , minutes , and pm am
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0'); // leading the 0 if needed
    //  AM OR PM
    let amPm = 'PM';

    // convert to 12 hours format if necessary
    if(!format24) {
      amPm = hours < 12? 'AM' : 'PM'; // convert to AM or PM
      hours = hours % 12 || 12; // Now adjust hours for 12-hour format
    }
    // const time= `${hours}:${minutes} : ${amPm}`
    return `${hours}:${minutes} : ${amPm}`;
  }

  
  return (
    <div className="forecast-item">
                  <p className="weather-temp">{ convertTimeEpoch(hourly.time_epoch  ,false ) }</p>
                  <img
                    src={`src/icons/${ dayOrNot ? weatherIcon : nightIcon }.png`}
                    alt=""
                    className="weather-icon"
                  />
                  <span className="day">
                    { temp }°C
                  </span>
                  <span className="days">
                    / { feelsLike}°C
                  </span>
                </div>
  );
};

export default Forecast;
