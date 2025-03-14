import React, { useState } from 'react';

interface CityInputProps {
  onCityChange: (city: string) => void;
  onSearch: () => void;
}

const CityInput: React.FC<CityInputProps> = ({ onCityChange, onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onCityChange(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Digite o nome da cidade"
        className="mt-4 p-2 border-3 border-white rounded-4xl"
      />
      <button
        onClick={onSearch}
        className="mt-2 ml-2 p-2 bg-dodger text-white cursor-pointer hover:bg-gray-dark rounded-3xl"
      >
        Buscar Clima
      </button>
    </div>
  );
};

export default CityInput;