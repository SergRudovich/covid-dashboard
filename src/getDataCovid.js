import axios from 'axios';

export { getDataCovid };

async function getDataCovid() {
  let response;

  try {
    response = await axios.get('https://corona.lmao.ninja/v2/countries');
  } catch (e) {
    console.log(`Failed to fetch countries: ${e.message}`, e);
    return;
  }

  const { data } = response;

  const hasData = Array.isArray(data) && data.length > 0;
  if (!hasData) return;

  const dataTwo = data.map((country) => ({
    country: country.country,
    deaths: country.deaths,
    cases: country.cases,
    recovered: country.recovered,
    todayCases: country.todayCases,
    todayDeaths: country.todayDeaths,
    todayRecovered: country.todayRecovered,
    caseOneHundredThousand: Math.floor(country.casesPerOneMillion / 10),
    deathsOneHundredThousand: Math.floor(country.deathsPerOneMillion / 10),
    recoveredOneHundredThousand: Math.floor(country.recoveredPerOneMillion / 10),
    flag: country.countryInfo.flag,
    lat: country.countryInfo.lat,
    long: country.countryInfo.long,
  }));

  return dataTwo;
}
