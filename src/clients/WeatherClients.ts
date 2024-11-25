import axios from 'axios';

export type WeatherAPI = 'openweathermap' | 'weatherapi' | 'meteomatics';

export class WeatherClient {
  private apiKey: string;
  private apiProvider: WeatherAPI;

  constructor(apiProvider: WeatherAPI, apiKey: string) {
    this.apiProvider = apiProvider;
    this.apiKey = apiKey;
  }

  async getWeather(cityName: string) {
    switch (this.apiProvider) {
      case 'openweathermap':
        return this.getOpenWeatherMap(cityName);
      case 'weatherapi':
        return this.getWeatherAPI(cityName);
      case 'meteomatics':
        return this.getMeteomatics(cityName);
      default:
        throw new Error('Unsupported API provider');
    }
  }

  // OpenWeatherMap
  private async getOpenWeatherMap(cityName: string) {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: cityName,
        appid: this.apiKey,
        units: 'metric', // Celsius için
      },
    });
    return response.data;
  }

  // WeatherAPI
  private async getWeatherAPI(cityName: string) {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
      params: {
        key: this.apiKey,
        q: cityName,
      },
    });
    return response.data;
  }

  // Meteomatics API
  private async getMeteomatics(cityName: string) {
    const response = await axios.get(`https://api.meteomatics.com/weather`, {
      params: {
        location: cityName,
        apikey: this.apiKey,
      },
    });
    return response.data;
  }
}
