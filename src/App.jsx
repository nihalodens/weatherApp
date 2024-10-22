
import { useState } from 'react';
import './App.css'

const api = {
  key: "f98fb830b8905def32aed953d936bff9",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState({})

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });

  }

  return (
    <div className='app'>
      <header className='app-header'>
        {/* header */}
        <h1>Weather App</h1>

        {/*Search Box  */}

        <div>
          <input type='text' placeholder='Enter city/town'
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>


        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>

    </div>
  )
}

export default App
