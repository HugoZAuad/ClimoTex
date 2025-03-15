import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import clearImage from "./assets/clear.png";
import rainImage from "./assets/rain.png";
import snowImage from "./assets/snow.png";
import cloudImage from "./assets/cloud.png";
import { StaticImageData } from "next/image";

interface ConditionProps {
  description: string;
}

const Condition: React.FC<ConditionProps> = ({ description }) => {
  let imageSrc: StaticImageData;
  let backgroundColor: string;

  switch (description.toLowerCase()) {
    case 'clear sky':
    case 'sunny':
      imageSrc = clearImage;
      backgroundColor = 'bg-yellow-500 border-4 border-yellow-100';
      break;
    case 'rain':
    case 'shower rain':
      imageSrc = rainImage;
      backgroundColor = 'bg-blue-500 border-4 border-blue-100';
      break;
    case 'snow':
      imageSrc = snowImage;
      backgroundColor = 'bg-gray-300 border-4 border-gray-100';
      break;
    default:
      imageSrc = cloudImage;
      backgroundColor = 'bg-gray-500 border-4 border-gray-100';
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center gap-2 p-4 ${backgroundColor} rounded-lg shadow-md`}
    >
      <div className='flex flex-row gap-1'>
        <h1 className="font-semibold">Condição:</h1><span className='capitalize'>{description}</span>
      </div>
      <Image className="rounded-3xl" src={imageSrc} alt="Condição" width={400} height={400} />
    </motion.div>
  );
};

export default Condition;