import { WeatherClient, WeatherAPI, CityClient } from '../src';

const cityClient = new CityClient();
const weatherClient = new WeatherClient('openweathermap', 'your_openweathermap_api_key');

const testCity = cityClient.getCity('Mardin');
console.log('City Info:', testCity);

weatherClient
  .getWeather('Mardin')
  .then(weather => {
    console.log('Weather Info:', weather);
  })
  .catch(err => console.error(err));
