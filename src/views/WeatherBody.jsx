/* eslint-disable react/prop-types */
const WeatherBody = ({ weather }) => {
  return (
    <div className="weather-container">
      <img src={`/src/icons/${weather.weatherIcon}.svg`} alt="icon" />
      <h1>{weather.name}</h1>
      <p>{weather.temperature}°C</p>
      <p>{weather.desc}</p>
    </div>
  );
};

export default WeatherBody;
