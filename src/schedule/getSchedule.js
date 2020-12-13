export {getSchedule}
// export {data}

import axios from 'axios';

let data;

async function getSchedule(country = 'all'){

  // let country = 'all';
  //
  // document.onclick = function(e){
  //   if(e.target.dataset.country){
  //     country = e.target.dataset.country;
  //     console.log(country)
  //   }
  //
  //   // console.log(e.target.innerHTML.trim())
  // }


  try {
    data = await axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=180`);
  } catch(e) {
    console.log(`Failed to fetch countries: ${e.message}`, e);
    return;
  }

  // console.log(data.data)

  return data.data;
}
