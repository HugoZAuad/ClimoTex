"use client";

import { useState } from 'react';
import { fetchWeather } from '../lib/api';
import Weather from '../app/Components/weather/weather';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Aplicativo de Clima</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Digite o nome da cidade"
        className="mt-4 p-2 border rounded"
      />
      <button
        onClick={handleSearch}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Buscar Clima
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {weather && <Weather weather={weather} />}
    </div>
  );
}