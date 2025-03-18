"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import Humidity from './Components/Humidity/Humidity';
import WindSpeed from './Components/Wind/Wind';
import CityInput from './Components/CityInput/CityInput';
import Temperature from './Components/Temperature/Temperature';
import Condition from './Components/Condition/Condition';
import Image from 'next/image';
import ClimoLogo from '../public/CLIMO_logo.png';

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
    <div className="p-4 m-2 text-background">
      {/* Adicionando o logo */}
      <div className="flex mb-4">
        <Image src={ClimoLogo} alt="ClimoTex Logo" width={250} height={250} />
      </div>

      <p className="text-lg font-semibold">Busque pela cidade desejada</p>
      <CityInput onCityChange={setCity} onSearch={handleSearch} />
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <AnimatePresence>
        {weather && (
          <motion.div
            key={weather.name}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.5 }} 
          >
            <h2 className="text-xl font-semibold flex justify-center items-center mt-8 mb-8 gap-1">
              Em <span className="text-dodger font-bold">{weather.name}</span> está com as seguintes condições climáticas:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Temperature value={weather.main.temp} />
              <Condition description={weather.weather[0].description} />
              <Humidity value={weather.main.humidity} />
              <WindSpeed value={weather.wind.speed} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}