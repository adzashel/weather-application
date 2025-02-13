/* eslint-disable no-undef */
import weatherIcons from '../constant'
const Forecast = ({ hourly }) => {
 
  const temp = Math.floor(hourly.temp_c)
  const feelsLike = Math.floor(hourly.feelslike_c);
  const weatherIcon = Object.keys(weatherIcons).find((icon) => weatherIcons[icon].includes(hourly.condition.code));


  // convert time epoch to 12 hours format
  const convertTimeEpoch = (timeEpoch , format24 = true ) => {

    // create date object
    const date = new Date(timeEpoch * 1000);

    // get hours , minutes , and pm am
    let hours = date.toLocaleString();
    const minutes = date.getMinutes().toString().padStart(2, '0'); // leading the 0 if needed
    let amPm = "AM";

    // convert to 12 hours format if necessary
    if(!format24) {
      if(hours >= 12) {
        amPm = "PM";
      }
      hours = hours % 12 || 12; // Now adjust hours for 12-hour format
    }
    // const time= `${hours}:${minutes} : ${amPm}`
    // console.log(time);
    return `${hours}:${minutes} : ${amPm}`;
  }

  
  return (
    <div  className="forecast-item">
                  <p className="weather-temp">{ convertTimeEpoch(hourly.time_epoch , false) }</p>
                  <img
                    src={`src/icons/${ weatherIcon }.svg`}
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
