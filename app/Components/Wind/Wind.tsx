interface WindSpeedProps {
    value: number
  }
  
  const WindSpeed: React.FC<WindSpeedProps> = ({ value }) => {
    return (
      <div className="text-2xl">
        Velocidade do Vento: {value} m/s
      </div>
    )
  }
  
  export default WindSpeed