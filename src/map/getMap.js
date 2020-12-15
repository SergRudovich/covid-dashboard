import { getDataCovid } from '/getDataCovid';

export { getMap };

async function getMap() {
  let center = [10, 0];
  let map;
  const mapOptions = {
    center,
    zoom: 2,
  };

  document.addEventListener('click', (e) => {
    if (e.target.dataset.latlong) {
      const num = e.target.dataset.latlong;
      center = num.split(',').map((i) => +i);
      map.setView(center, 3);

      const myIcon = L.icon({
        iconUrl: 'https://lh3.googleusercontent.com/proxy/QhQpk-g0FYu2jVhRmbSAlJlpU-CcLPp_zvNgKZulCcu6FrfnMfZ26GpBOnz-gjrjM2w-0D2LjJdjHc0Sujjp50SXMn7P1rYUnYvp-NVQOamrqeFbYVnVS8ewnYgXPIto2E2wuqiPSGM6NyPGV8GBGWd9',
        iconSize: [25, 30],
        iconAnchor: [4, 25],
        popupAnchor: [-3, -76],
      });

      L.marker(center, { icon: myIcon }).addTo(map);
    }
  });

  const func = () => {
    const mapContainer = document.querySelector('#sample');
    map = new L.map(mapContainer, mapOptions);

    const layerOne = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png', {
      maxZoom: 20,
    }).addTo(map);

    const layerTwo = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    	maxZoom: 19,
    	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });

    const layerThree = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
    	attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
    	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
    	minZoom: 1,
    	maxZoom: 8,
    	format: 'jpg',
    	time: '',
    	tilematrixset: 'GoogleMapsCompatible_Level',
    });

    const baseMaps = {
      one: layerOne,
      two: layerTwo,
      three: layerThree,
    };

    L.control.layers(baseMaps, {}).addTo(map);
  };
  func();

  const data = await getDataCovid();

  data.forEach((country) => {
    let casesString;

    casesString = country.cases.toString();

    if (casesString > 1000000) {
      casesString = `${casesString.slice(0, -6)}m+`;
    }
    if (casesString > 1000) {
      casesString = `${casesString.slice(0, -3)}k+`;
    }

    const html = `
      <span class="icon-marker">
       <span class="icon-marker-tooltip">
         <h2>${country.country}</h2>
         <ul>
           <li><strong>Confirmed:</strong> ${country.cases}</li>
           <li><strong>Deaths:</strong> ${country.deaths}</li>
           <li><strong>Recovered:</strong> ${country.recovered}</li>
         </ul>
       </span>
       ${casesString}
      </span>
    `;

    L.marker([country.lat, country.long], {
      icon: L.divIcon({
        className: 'icon',
        html,
      }),
      riseOnHover: true,
    }).addTo(map);
  });
}
