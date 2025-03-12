import { useState, useEffect } from 'react'
import Clouds from '../../Components/Clouds/Clouds'
import Rain from '../../Components/Rain/Rain'

interface WeatherBackgroundProps {
  description: string
  weather: {
    name: string
    main: {
      temp: number
    }
    weather: {
      description: string
    }[]
  }
}

const WeatherBackground: React.FC<WeatherBackgroundProps> = ({ description }) => {
  const [bgClass, setBgClass] = useState<string>('')

  useEffect(() => {
    switch (description) {
      case 'clear sky':
        setBgClass('bg-blue-500')
        break
      case 'few clouds':
        setBgClass('bg-gray-300')
        break
      case 'scattered clouds':
        setBgClass('bg-gray-500')
        break
      case 'rain':
        setBgClass('bg-blue-900')
        break
      case 'thunderstorm':
        setBgClass('bg-black')
        break
      default:
        setBgClass('bg-gray-700')
    }
  }, [description])

  return (
    <div className={`relative h-screen w-screen transition-all duration-500 ${bgClass}`}>
      {description.includes('cloud') && <Clouds />}
      {description.includes('rain') && <Rain />}
    </div>
  )
}

export default WeatherBackground