import axios from 'axios';

export { getSchedule };

let data;

async function getSchedule(country = 'all') {
  try {
    data = await axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=180`);
  } catch (e) {
    console.log(`Failed to fetch countries: ${e.message}`, e);
    return;
  }
  return data.data;
}
