import cities from '../data/cities.json';
import axios from 'axios';

export class CityClient {
  async getCityDetails(cityName: string) {
    const city = Object.values(cities).find(c => c.name.toLowerCase() === cityName.toLowerCase());

    if (!city) {
      throw new Error(`City "${cityName}" not found in local data.`);
    }

    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(cityName)}&prop=extracts&exintro&explaintext`;
    let wikiInfo = null;

    try {
      const response = await axios.get(url);
      const pages = response.data.query.pages;
      const page = Object.values(pages)[0] as any;

      if (!page.missing) {
        wikiInfo = page.extract;
      } else {
        wikiInfo = "No additional information found on Wikipedia.";
      }
    } catch (error) {
      wikiInfo = `Failed to fetch data from Wikipedia: ${error.message}`;
    }

    return {
      localData: city,
      wikiInfo,
      source: "Wikipedia"
    };
  }
}
