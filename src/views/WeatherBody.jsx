/* eslint-disable react/prop-types */
const WeatherBody = ({ weather }) => {
  const cityName = weather.name;
  const temperature = weather.temperature;
  const description = weather.desc;
  return (
    <div className="weather-container">
      <img src={`/src/icons/${weather.weatherIcon}.svg`} alt="icon" />
      <h1>{ cityName }</h1>
      <p>{ temperature }°C</p>
      <p>{ description }</p>
    </div>
  );
};

export default WeatherBody;
