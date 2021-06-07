import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './style.css';
import Weather from './components/weather';

function App() {
  const [query,setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if(e.key === 'Enter') {
        const data = await fetchWeather(query);

        setWeather(data);
        setQuery('');
    }
  }

  return (
    <div className="main-container">
      <h1>Search by your city name</h1>
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && <Weather item={weather} /> }
    </div>
  );
}

export default App;
