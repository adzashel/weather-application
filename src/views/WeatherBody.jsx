/* eslint-disable react/prop-types */
import clear from '../../public/icons/clear.svg'
const WeatherBody = ({ weather }) => {
  const cityName = weather.name;
  const temperature = weather.temperature;
  const description = weather.desc;
  const icons = `../../public/icons/${ weather.weatherIcon}.svg`;

  return (
    <div className="weather-container">
      <img src={ !icons ? clear : icons } alt="icon" />
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
