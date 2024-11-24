# Türkiye Yerbilgisi Modülü

Bu modül, Türkiye'deki şehir, ilçe ve köy bilgilerini ve hava durumu verilerini sağlar. Hem yerel veritabanı hem de dış API'ler kullanılabilir.

## Kurulum

```bash
npm install turkiye-yerbilgisi
```
### Kullanım

#### Şehir Bilgisi
```js
import { CityClient } from 'turkiye-yerbilgisi';

const cityClient = new CityClient();
const cityInfo = cityClient.getCity('Mardin');
console.log(cityInfo);
```
#### Hava Durumu
```js
import { WeatherClient } from 'turkiye-yerbilgisi';

const weatherClient = new WeatherClient('your_api_key');
weatherClient.getWeather('Mardin').then(weather => {
  console.log(weather);
}).catch(err => console.error(err));
```
