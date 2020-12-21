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

    if(e.target.dataset.latlong){
      let num = e.target.dataset.latlong;
      center = num.split(',').map(i => +i);
      map.setView(center, 3);

      let myIcon = L.icon({
        iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        iconSize: [40, 40],
        iconAnchor: [13, 40],
        popupAnchor: [-3, -76],
      });


      L.marker(center, {icon: myIcon}).addTo(map);

    }
  });

  const func = () => {
    const mapContainer = document.querySelector('#sample');
    map = new L.map(mapContainer, mapOptions);


    const light = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    	maxZoom: 19,
    	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });


    const darkTwo = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
    	attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
    	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
    	minZoom: 1,
    	maxZoom: 8,
    	format: 'jpg',
    	time: '',
    	tilematrixset: 'GoogleMapsCompatible_Level',
    });

    var dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    	subdomains: 'abcd',
    	maxZoom: 19
    }).addTo(map);

    const baseMaps = {
      dark: dark,
      light: light,
      darkTwo: darkTwo,
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
      <span data-country='${country.country}' class="icon-marker">
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
