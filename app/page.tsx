"use client";

import { useState } from 'react';
import Temperature from './Components/Temperature/Temperatura';
import Humidity from './Components/Humidity/Humidity';
import WindSpeed from './Components/Wind/Wind';
import WeatherBackground from './Components/WeatherBackground/WeatherBackground';
import CityInput from './Components/CityInput/CityInput';
import HistoricalWeather from './Components/HistoricaWeather/HistoricaWeather';

interface WeatherData {
  weather: { description: string }[];
  name: string;
  main: { temp: number; humidity: number };
  wind: { speed: number };
  coord: { lat: number; lon: number };
}

const fetchWeather = async (city: string) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric&lang=pt`);
  if (!res.ok) {
    throw new Error(`Erro ao buscar dados do clima: ${res.statusText}`);
  }
  return res.json();
};

export default function Home() {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');

  const handleSearch = async () => {
    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setError('');
    } catch (err) {
      setError((err as Error).message);
      setWeather(null);
    }
  };

  return (
    <div className="relative h-screen w-screen">
      {weather && <WeatherBackground description={weather.weather[0].description} weather={weather} />}
      <div className="absolute top-0 left-0 right-0 p-4">
        <h1 className="text-3xl font-bold">Aplicativo de Clima</h1>
        <CityInput onCityChange={setCity} onSearch={handleSearch} />
        {error && <p className="text-red-500">{error}</p>}
        {weather && (
          <div className="p-4 border rounded shadow-md bg-white">
            <h2 className="text-xl font-bold">{weather.name}</h2>
            <p>Temperatura: {weather.main.temp} °C</p>
            <p>Condição: {weather.weather[0].description}</p>
          </div>
        )}
        {weather && (
          <div className="p-4">
            <Temperature value={weather.main.temp} />
            <Humidity value={weather.main.humidity} />
            <WindSpeed value={weather.wind.speed} />
          </div>
        )}
        {weather && (
          <HistoricalWeather lat={weather.coord.lat} lon={weather.coord.lon} />
        )}
      </div>
    </div>
  );
}