export interface City {
  cityName: string;
  cityCode: string;
  region: string;
  population: number;
  area: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
}
