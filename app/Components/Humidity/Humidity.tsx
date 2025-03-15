import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';

interface HumidityProps {
  value: number;
}

const Humidity: React.FC<HumidityProps> = ({ value }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-2 p-4 bg-blue-100 border-4 border-dodger rounded-lg shadow-md w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
    >
      <p className="font-bold text-xl">
        Umidade: {value}%
      </p>
      <div className="relative w-40 h-40 mt-10 flex justify-center items-center">
        <FontAwesomeIcon icon={faTint} className="absolute inset-0 text-gray-300" size="10x" />
        <FontAwesomeIcon icon={faTint} className="absolute inset-0 text-blue-500" size="10x" style={{ clipPath: `inset(${100 - value}% 0 0 0)` }} />
      </div>
    </motion.div>
  );
};

export default Humidity;