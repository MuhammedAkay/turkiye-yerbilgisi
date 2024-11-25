import axios from 'axios';

export async function fetchWeatherData(url: string, params: Record<string, any>) {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error(`API Request Failed: ${error.message}`);
  }
}
