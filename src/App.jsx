import "./App.css";
import Form from './views/Form';
import WeatherBody from './views/WeatherBody';
import Forecast from './views/Forecast';
import { useState } from "react";
import { useEffect } from "react";
import { weatherTypes } from "./constant";

const api = {
  key: '766b389336c246ab9b5141950241012',
  baseURL: 'http://api.weatherapi.com/v1/forecast.json',
}


function App() {
  const  [ weather , setWeather ] = useState([]);
  const [ search , setSearch ] = useState('');

  // fetch api 
  const handleSearch = async () => {
    try {
      const data = await fetch(`${ api.baseURL }?key=${ api.key }&q=${ search }&days=7`);
      const result = await data.json();
      if(result.error) {
        console.log(result.error);
      } else {
        const name = result.location.name;
        const temperature = Math.floor(result.current.temp_c);
        const forecast = result.forecast.forecastday;
        const desc = result.current.condition.text;
        const weatherIcon = Object.keys(weatherTypes).find(icon => weatherTypes[icon].includes(result.current.condition.code));
        setWeather({
          name,
          temperature,
          desc,
          weatherIcon,
          forecast,
        });
        setSearch('');
        console.log(result);
      }
     
    }catch (e) {
      console.log('Error fetching weather', e);
    }
  }

  return (
    <>
      <div className="container">
        <Form  search={ search } setSearch={ setSearch } onHandleSearch={ handleSearch }/>
        <WeatherBody weather = { weather }/>
        <Forecast weather={ weather }/>
      </div>
    </>
  );
}

export default App;
