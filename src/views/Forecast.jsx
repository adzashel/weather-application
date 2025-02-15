/* eslint-disable no-undef */
import clear from '../../public/icons/clear.svg'
import clouds from '../../public/icons/clouds.svg'
import rain from '../../public/icons/rain.svg'
import moderateHeavyRain from '../../public/icons/moderate_heavy_rain.svg'
import mist from '../../public/icons/mist.svg'
import snow from '../../public/icons/snow.svg'
import thunder from '../../public/icons/thunder.svg'
import thunderRain from '../../public/icons/thunder_rain.svg'
import moon from '../../public/icons/moon.svg'
import nightRaining from '../../public/icons/nightRaining.svg'
import nightCLoudy from '../../public/icons/nightClouds.svg';


const icons = {
  clear : [ 1000 ],
  clouds : [ 1003, 1006, 1009 ],
  mist : [ 1030 , 1135 , 1147 ],
  rain : [ 1063 , 1150 , 1153 , 1168 , 1171 , 1180 , 1183 , 1198 , 1201 , 1240 , 1243 , 1246 , 1273 , 1276],
  moderate_heavy_rain : [ 1063 , 1150 , 1153 , 1168 , 1171 , 1180 , 1183 , 1198 , 1201 , 1240 , 1243 , 1246 , 1273, 1276 , 1186],
  snow : [ 1066 , 1069 , 1072 , 1114 , 1117 , 1204 , 1207 , 1210 , 1213 , 1216 , 1219 , 1222 , 1225 , 1237 , 1249 , 1252 , 1255 , 12558 , 1261 , 1264 , 1279 , 1282 ],
  thunder : [ 1087 , 1279 , 1282 ],
  thunder_rain : [1273 , 1276]
  }

  const nightIcons = {
    moon : [1000],
    nightClouds : [1003 , 1006 , 1009],
    mist : [ 1030 , 1135 , 1147 ],
    nightRaining : [1063 , 1150 , 1153 , 1168 , 1171 , 1180 , 1183 , 1198 , 1201 , 1240 , 1243 , 1246 , 1273 , 1276],
    moderate_heavy_rain : [ 1063 , 1150 , 1153 , 1168 , 1171 , 1180 , 1183 , 1198 , 1201 , 1240 , 1243 , 1246 , 1273, 1276 ,1186],
    snow : [ 1066 , 1069 , 1072 , 1114 , 1117 , 1204 , 1207 , 1210 , 1213 , 1216 , 1219 , 1222 , 1225 , 1237 , 1249 , 1252 , 1255 , 12558 , 1261 , 1264 , 1279 , 1282 ],
    thunder : [ 1087 , 1279 , 1282 ],
    thunder_rain : [1273 , 1276]
  }
const Forecast = ({ hourly }) => {
  const dayOrNot = hourly.is_day;
  const temp = Math.floor(hourly.temp_c)
  const feelsLike = Math.floor(hourly.feelslike_c);
  const weatherIcon = Object.keys(icons).find((icon) => icons[icon].includes(hourly.condition.code));
  const nightIcon = Object.keys(nightIcons).find((icon) => nightIcons[icon].includes(hourly.condition.code));

  // day icon
  const iconsWeather = {
    clear : clear,
    clouds,
    mist,
    rain,
    moderate_heavy_rain : moderateHeavyRain,
    snow,
    thunder,
    thunder_rain : thunderRain

  }[weatherIcon]

  // night icons
  const iconsNight = {
    moon : moon,
    nightClouds : nightCLoudy,
    mist,
    nightRaining ,
    moderate_heavy_rain : moderateHeavyRain,
    snow,
    thunder,
    thunder_rain : thunderRain
  }[nightIcon]
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
                    src={ dayOrNot ? iconsWeather : iconsNight}
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
