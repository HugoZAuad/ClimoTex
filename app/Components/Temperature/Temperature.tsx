import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";
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

  if (value < 15) {
    imageSrc = coldImage;
  } else if (value >= 15 && value < 26) {
    imageSrc = warmImage;
  } else {
    imageSrc = hotImage;
  }

  return (
    <div>
      <p className="flex gap-1 justify-center items-center mb-2 font-bold">
        <FontAwesomeIcon icon={faTemperatureHigh} /> Temperatura: {value} °C
      </p>
      <Image className="rounded-3xl" src={imageSrc} alt="Temperatura" width={400} height={400} />
    </div>
  );
};

export default Temperature;
