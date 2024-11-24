import { CityClient } from './clients/CityClient';
import { WeatherClient } from './clients/WeatherClient';

export { CityClient, WeatherClient };

// Eğer require ile kullanım sağlanacaksa, aşağıdaki gibi bir export yapılabilir:
module.exports = { CityClient, WeatherClient };
