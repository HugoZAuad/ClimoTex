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
      className={`flex flex-col items-center gap-2 p-4 ${backgroundColor} rounded-lg shadow-md w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg`}
    >
      <p className="font-bold text-xl flex items-center gap-2">
        <FontAwesomeIcon icon={faWind} /> Velocidade dos ventos:
      </p>
      <p className="text-7xl mt-20 font-bold">
        {value} m/s
        {value >= 15 && <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 ml-2" />}
      </p>
    </motion.div>
  );
};

export default WindSpeed;