import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';

interface WindSpeedProps {
  value: number;
}

const WindSpeed: React.FC<WindSpeedProps> = ({ value }) => {
  let backgroundColor: string;

  if (value < 5) {
    backgroundColor = 'bg-green-500 border-4 border-green-200';
  } else if (value >= 5 && value < 15) {
    backgroundColor = 'bg-yellow-500 border-4 border-yellow-100';
  } else {
    backgroundColor = 'bg-red-500 border-4 border-red-200';
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col w-100 h-85 items-center gap-2 p-4 ${backgroundColor} rounded-lg shadow-md w-80 h-80`}
    >
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faWind} /> 
        <h1 className='font-bold text-xl'>Velocidade dos ventos:</h1>
        <span className='text-lg'>{value} m/s</span>
        {value >= 15 && <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500" />}
      </div>
      <p className="flex text-4xl justify-center items-center mt-15 text-justify">
        {value < 5 && "Ventos leves, ideal para atividades ao ar livre."}
        {value >= 5 && value < 15 && "Ventos moderados, pode ser necessário segurar objetos soltos."}
        {value >= 15 && "Ventos fortes, cuidado com objetos soltos e árvores."}
      </p>
    </motion.div>
  );
};

export default WindSpeed;