import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar dados do clima: ' + error.message);
  }
};