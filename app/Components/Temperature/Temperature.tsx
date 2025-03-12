import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

interface TemperatureProps {
    value: number;
}

const Temperature: React.FC<TemperatureProps> = ({ value }) => {
  return (
    <p className="flex gap-1">
      <FontAwesomeIcon icon={faTemperatureHigh} /> Temperatura: {value} °C
    </p>
  );
};

export default Temperature;