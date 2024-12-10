/* eslint-disable no-unused-vars */
import "./App.css";
import Form from './views/Form';
import WeatherBody from './views/WeatherBody';
import Forecast from './views/Forecast';
import { useState } from "react";
import { useEffect } from "react";

const api = {
  key: '766b389336c246ab9b5141950241012',
  baseURL: 'http://api.weatherapi.com/v1/forecast.json',
}


function App() {
  const  [ weather , setWeather ] = useState(false);
  const [ search , setSearch ] = useState('');

  // fetch api 
  const getWeather = async () => {
    try {
      const data = await fetch(`${ api.baseURL }?key=${ api.key }&q=${ search }&days=7`);
      const result = await data.json();
      if(result.error) {
        console.log(result.error);
      } else {
        console.log(result)
        setWeather(result);
      }
     
    }catch (e) {
      console.log('Error fetching weather', e);
    }
  }

  useEffect(() => {
    getWeather();
  } , [search]);
  return (
    <>
      <div className="container">
        <Form  search={ search } setSearch={ setSearch }/>
        <WeatherBody weather = { weather }/>
        <Forecast/>
      </div>
    </>
  );
}

export default App;
