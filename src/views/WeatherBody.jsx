/* eslint-disable react/prop-types */
import moduleName from '../public/icons/clear.png'
const WeatherBody = ({ weather }) => {
  const cityName = weather.name;
  const temperature = weather.temperature;
  const description = weather.desc;
  const icons = weather.weatherIcon;

  return (
    <div className="weather-container">
      <img src={`./src/public/icons/${icons}.svg`} alt="icon" />
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
