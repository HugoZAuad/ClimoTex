interface TemperatureProps {
    value: number
  }
  
  const Temperature: React.FC<TemperatureProps> = ({ value }) => {
    return (
      <div className="text-2xl">
        Temperatura: {value}°C
      </div>
    )
  }
  
  export default Temperature