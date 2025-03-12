import { faTint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HumidityProps {
  value: number;
}

const Humidity: React.FC<HumidityProps> = ({ value }) => {
  return (
    <p className="flex gap-2">
      <FontAwesomeIcon icon={faTint} /> Umidade: {value} %
    </p>
  );
};

export default Humidity;
