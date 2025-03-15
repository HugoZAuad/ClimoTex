import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHigh, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import Image from "next/image";
import coldImage from "./assets/cold.png";
import warmImage from "./assets/warm.png";
import hotImage from "./assets/hot.png";
import { StaticImageData } from "next/image";

interface TemperatureProps {
  value: number;
}

const Temperature: React.FC<TemperatureProps> = ({ value }) => {
  let imageSrc: StaticImageData;
  let backgroundColor;

  if (value < 15) {
    imageSrc = coldImage;
    backgroundColor = 'bg-blue-500 border-4 border-blue-100';
  } else if (value >= 15 && value < 26) {
    imageSrc = warmImage;
    backgroundColor = 'bg-yellow-500 border-4 border-yellow-100';
  } else {
    imageSrc = hotImage;
    backgroundColor = 'bg-red-500 border-4 border-red-300';
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center gap-2 p-4 ${backgroundColor} rounded-lg shadow-md w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg`}
    >
      <p className="flex gap-1 justify-center items-center font-bold">
        <FontAwesomeIcon icon={faTemperatureHigh} /> Temperatura: {value} °C
        {value >= 30 && <FontAwesomeIcon icon={faExclamationTriangle} className="text-gold" />}
      </p>
      <Image className="rounded-3xl" src={imageSrc} alt="Temperatura" width={400} height={400} />
    </motion.div>
  );
};

export default Temperature;