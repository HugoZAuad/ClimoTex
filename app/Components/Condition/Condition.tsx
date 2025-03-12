import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

interface ConditionProps {
  description: string;
}

const Condition: React.FC<ConditionProps> = ({ description }) => {
  return (
    <p className="flex">
      <FontAwesomeIcon icon={faCloud} /> Condição: {description}
    </p>
  );
};

export default Condition;
