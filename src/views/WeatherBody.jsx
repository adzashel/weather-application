/* eslint-disable react/prop-types */
const WeatherBody = ({ weather }) => {
  const cityName = weather.name;
  const temperature = weather.temperature;
  const description = weather.desc;

  return (
    <div className="weather-container">
      <img src={  weather.icon } alt="icon" />
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
