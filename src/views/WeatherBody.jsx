import clear from "../assets/icons/clear.svg";
const WeatherBody = () => {
  return (
    <div className="weather-container">
          <img src={clear} alt="" />
          <h1>City Name</h1>
          <p> 25°C</p>
          <p>Partly Cloudy</p>
        </div>
  )
}

export default WeatherBody
