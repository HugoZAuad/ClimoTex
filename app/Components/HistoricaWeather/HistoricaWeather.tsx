import React, { useState } from 'react';

interface HistoricalWeatherProps {
  lat: number;
  lon: number;
}

interface WeatherData {
  current: {
    temp: number;
    weather: { description: string }[];
  };
}

const fetchHistoricalWeather = async (lat: number, lon: number, time: number) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric&lang=pt`);
  if (!res.ok) {
    throw new Error(`Erro ao buscar dados históricos do clima: ${res.statusText}`);
  }
  return res.json();
};

const HistoricalWeather: React.FC<HistoricalWeatherProps> = ({ lat, lon }) => {
  const [date, setDate] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');

  const handleSearch = async () => {
    try {
      const timestamp = Math.floor(new Date(date).getTime() / 1000);
      const data = await fetchHistoricalWeather(lat, lon, timestamp);
      setWeather(data);
      setError('');
    } catch (err) {
      setError((err as Error).message);
      setWeather(null);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-xl font-bold">Buscar Clima Histórico</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mt-4 p-2 border rounded"
      />
      <button
        onClick={handleSearch}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Buscar
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {weather && (
        <div className="mt-4">
          <p>Temperatura: {weather.current.temp} °C</p>
          <p>Condição: {weather.current.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default HistoricalWeather;