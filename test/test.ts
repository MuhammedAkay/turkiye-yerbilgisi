import { CityClient, WeatherClient } from '../src';

const cityClient = new CityClient();
const weatherClient = new WeatherClient('your_api_key');

const testCity = cityClient.getCity('Mardin');
console.log(testCity);

weatherClient.getWeather('Mardin').then(weather => {
  console.log(weather);
}).catch(err => console.error(err));
