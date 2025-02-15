/* eslint-disable react/prop-types */
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
  moderate_heavy_rain : [ 1063 , 1150 , 1153 , 1168 , 1171 , 1180 , 1183 , 1198 , 1201 , 1240 , 1243 , 1246 , 1273, 1276 , 1186, 1189],
  snow : [ 1066 , 1069 , 1072 , 1114 , 1117 , 1204 , 1207 , 1210 , 1213 , 1216 , 1219 , 1222 , 1225 , 1237 , 1249 , 1252 , 1255 , 12558 , 1261 , 1264 , 1279 , 1282 ],
  thunder : [ 1087 , 1279 , 1282 ],
  thunder_rain : [1273 , 1276]
  }

  const nightIcons = {
    moon : [1000],
    nightCLoudy : [1003 , 1006 , 1009],
    mist : [ 1030 , 1135 , 1147 ],
    nightRaining : [1063 , 1150 , 1153 , 1168 , 1171 , 1180 , 1183 , 1198 , 1201 , 1240 , 1243 , 1246 , 1273 , 1276],
    moderate_heavy_rain : [ 1063 , 1150 , 1153 , 1168 , 1171 , 1180 , 1183 , 1198 , 1201 , 1240 , 1243 , 1246 , 1273, 1276 ,1186 , 1189],
    snow : [ 1066 , 1069 , 1072 , 1114 , 1117 , 1204 , 1207 , 1210 , 1213 , 1216 , 1219 , 1222 , 1225 , 1237 , 1249 , 1252 , 1255 , 12558 , 1261 , 1264 , 1279 , 1282 ],
    thunder : [ 1087 , 1279 , 1282 ],
    thunder_rain : [1273 , 1276]
  }

  

const WeatherBody = ({ weather }) => {
  const cityName = weather.name;
  const temperature = weather.temperature;
  const description = weather.desc;
  

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
  
    }[weather.weatherIcon]
  
    // night icons
    const iconsNight = {
      moon : moon,
     nightCLoudy,
      mist,
      nightRaining ,
      moderate_heavy_rain : moderateHeavyRain,
      snow,
      thunder,
      thunder_rain : thunderRain
    }[weather.nightIcons]

  return (
    <div className="weather-container">
      <img src={ weather.astro ? iconsWeather : iconsNight } alt="icon" />
      <h1>{ cityName }</h1>
      <p className="temperature">{ temperature }°C</p>
      <p className="desc">{ description }</p>
      <div className="mobile-ver">
      <p className="description">{ description } /</p>
      <p className="temp">{ temperature }°C</p>
      </div>
    </div>
  );
};

export default WeatherBody;
