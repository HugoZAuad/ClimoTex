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
        className="mt-4 p-2 border rounded"
      />
      <button
        onClick={onSearch}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Buscar Clima
      </button>
    </div>
  );
};

export default CityInput;