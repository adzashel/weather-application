import "./App.css";
import clear from "./assets/icons/clear.svg";

function App() {
  return (
    <>
      <div className="container">
        <form className="form">
          <button>
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <input
            className="input"
            placeholder="Search City..."
            required=""
            type="text"
          />
          <button className="reset" type="reset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </form>
        <div className="weather-container">
          <img src={clear} alt="" />
          <h1>City Name</h1>
          <p> 25°C</p>
          <p>Partly Cloudy</p>
        </div>

        {/* daily forecast */}
        <div className="forecast-container">
          <h2>Daily Forecast</h2>
          <div className="forecast-item-wrapper">
            <div className="forecast-item">
              <img src={clear} alt="" className="weather-icon" />
              <p className="day">Monday</p>
              <p className="weather-temp">25°C - 20°C</p>
            </div>
            <div className="forecast-item">
              <img src={clear} alt="" className="weather-icon" />
              <p className="day">Tuesday</p>
              <p className="weather-temp">28°C - 22°C</p>
            </div>
            <div className="forecast-item">
              <img src={clear} alt="" className="weather-icon" />
              <p className="day">Wednesday</p>
              <p className="weather-temp">27°C - 21°C</p>
            </div>
            <div className="forecast-item">
              <img src={clear} alt="" className="weather-icon" />
              <p className="day">Thursday</p>
              <p className="weather-temp">27°C - 21°C</p>
            </div>
            <div className="forecast-item">
              <img src={clear} alt="" className="weather-icon" />
              <p className="day">Friday</p>
              <p className="weather-temp">27°C - 21°C</p>
            </div>
            <div className="forecast-item">
              <img src={clear} alt="" className="weather-icon" />
              <p className="day">Saturday</p>
              <p className="weather-temp">27°C - 21°C</p>
            </div>
            <div className="forecast-item">
              <img src={clear} alt="" className="weather-icon" />
              <p className="day">Sunday</p>
              <p className="weather-temp">27°C - 21°C</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
