"use client";

import { useState } from 'react';
import Humidity from './Components/Humidity/Humidity';
import WindSpeed from './Components/Wind/Wind';
import CityInput from './Components/CityInput/CityInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTint } from '@fortawesome/free-solid-svg-icons';

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
      <div className="relative z-10 p-4">
        <h1 className="text-3xl font-bold">ClimoTex</h1> {/* Inserir depois a foto da logo */}
        <p>O seu aplicativo de clima em tempo real</p>
        <CityInput onCityChange={setCity} onSearch={handleSearch} />
        {error && <p className="text-red-500">{error}</p>}
        {weather && (
          <div className="bg-white bg-opacity-75 p-4 rounded shadow-md">
            <h2 className="text-xl font-bold">Cidade: {weather.name}</h2>
            <p><FontAwesomeIcon icon={faTemperatureHigh} /> Temperatura: {weather.main.temp} °C</p>
            <p><FontAwesomeIcon icon={faTint} /> Condição climática: {weather.weather[0].description}</p>
            <div>
              <Humidity value={weather.main.humidity} />
              <WindSpeed value={weather.wind.speed} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}