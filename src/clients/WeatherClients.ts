import axios from 'axios';

export class WeatherClient {
  constructor(private apiKey: string) {}

  async getWeather(cityName: string) {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`);
    if (response.status !== 200) {
      throw new Error('API error');
    }
    return response.data;
  }
}
