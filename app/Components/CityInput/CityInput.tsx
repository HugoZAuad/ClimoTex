import React from 'react';

interface CityInputProps {
  city: string;
  setCity: (city: string) => void;
  fetchWeather: () => void;
}

const CityInput: React.FC<CityInputProps> = ({ city, setCity, fetchWeather }) => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Digite o nome da cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={fetchWeather} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Obter Clima
      </button>
    </div>
  );
};

export default CityInput;