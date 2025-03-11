import React from 'react';

interface WeatherProps {
  weather: {
    name: string;
    main: {
      temp: number;
    };
    weather: {
      description: string;
    }[];
  };
}

const Weather: React.FC<WeatherProps> = ({ weather }) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p>Temperatura: {weather.main.temp} °C</p>
      <p>Condição: {weather.weather[0].description}</p>
    </div>
  );
};

export default Weather;