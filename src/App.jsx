import './App.css'
import clear from './assets/icons/clear.svg';

function App() {

  return (
    <>
      <div className="container">
        <form action="">
          <input type="text" placeholder="Enter your city" />
          <button type="submit">Search</button>
        </form>
        <div className="weather-container">
          <img src={ clear } alt="" /> 
          <h1>City Name</h1>
          <p>Temperature: 25°C</p>
        </div>

        {/* daily forecast */}
        <div className="forecast-container">
          <h2>Daily Forecast</h2>
          <div className="forecast-item">
            <img src={ clear } alt="" />
            <p>Monday</p>
            <p>25°C - 20°C</p>
          </div>
          <div className="forecast-item">
            <img src={ clear } alt="" />
            <p>Tuesday</p>
            <p>28°C - 22°C</p>
          </div>
          <div className="forecast-item">
            <img src={ clear } alt="" />
            <p>Wednesday</p>
            <p>27°C - 21°C</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
