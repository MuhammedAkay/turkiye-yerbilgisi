import axios from 'axios';

export async function fetchData(url: string, apiKey?: string) {
  try {
    const response = await axios.get(url, {
      params: apiKey ? { appid: apiKey } : {},
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data from API: ${error.message}`);
  }
}
