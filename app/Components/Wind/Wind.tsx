import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";

interface WindSpeedProps {
  value: number;
}

const WindSpeed: React.FC<WindSpeedProps> = ({ value }) => {
  return (
    <p className="flex gap-1">
      <FontAwesomeIcon icon={faWind} /> Velocidade dos ventos: {value} m/s
    </p>
  );
};

export default WindSpeed;
