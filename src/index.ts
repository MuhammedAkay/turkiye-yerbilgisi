import { CityInfoClient } from './modules/cityInfoClient';
import { WeatherClient } from './modules/weatherClient';

class TurkiyeYerBilgisi {
  public cityInfoClient: CityInfoClient;
  public weatherClient: WeatherClient | null;

  constructor(weatherApiKey?: string, weatherApiProvider?: 'openweathermap' | 'weatherapi') {
    this.cityInfoClient = new CityInfoClient();

    // Hava durumu API anahtarı ve sağlayıcı seçeneği isteğe bağlıdır
    if (weatherApiKey && weatherApiProvider) {
      this.weatherClient = new WeatherClient(weatherApiKey, weatherApiProvider);
    } else {
      this.weatherClient = null;
    }
  }

  /**
   * Şehir bilgisi sorgulama fonksiyonu
   * @param cityName Şehir adı
   */
  getCityInfo(cityName: string) {
    return this.cityInfoClient.getCityInfo(cityName);
  }

  /**
   * Hava durumu sorgulama fonksiyonu
   * @param cityName Şehir adı
   */
  async getWeather(cityName: string) {
    if (!this.weatherClient) {
      throw new Error('WeatherClient tanımlanmadı. Lütfen bir API anahtarı ve sağlayıcı belirleyin.');
    }
    return await this.weatherClient.getWeather(cityName);
  }
}

export default TurkiyeYerBilgisi;
