// components/Humidity.tsx
interface HumidityProps {
    value: number
  }
  
  const Humidity: React.FC<HumidityProps> = ({ value }) => {
    return (
      <div className="text-2xl">
        Umidade: {value}%
      </div>
    )
  }
  
  export default Humidity