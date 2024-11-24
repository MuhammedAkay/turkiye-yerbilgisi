import cities from '../data/cities.json';
import axios from 'axios';

export class CityClient {
  constructor(private apiKey?: string) {}

  getCity(cityName: string) {
    const city = cities.find(c => c.cityName.toLowerCase() === cityName.toLowerCase());
    if (!city) throw new Error('City not found');
    return city;
  }
  
  async getCityWeather(cityName: string) {
    if (this.apiKey) {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`);
      if (response.status !== 200) {
        throw new Error('API error');
      }
      return response.data;
    } else {
      throw new Error('API key is not provided');
    }
  }
}
