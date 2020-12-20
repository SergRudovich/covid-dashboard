import { getCardCountry } from './getCardCountry';

export { searchCountry };
export { fromVirtualKbd };
export { str };
export { len };

let str = '';
let len = 0;
const countriesFound = [];
let data;

function searchCountry(dataIn) {
  data = dataIn;
  // document.onclick = function(e) {
  document.addEventListener('click', (e) => {
    if (e.target.className !== 'data-search') return;
    const input = document.querySelector('.data-search');

    function inputGetChar() {
      str = input.value;
      len = str.length;

      // data.then(data => {
      //   countriesFound = data.filter(item => {
      //     let country = item.country.toLowerCase();
      //     return country.slice(0, len) === str;
      //   })
      //
      //   return countriesFound;
      // })

      data.then((countriesFound) => {
        document.querySelector('.data-countries').innerHTML = `
          ${countriesFound.map(getCardCountry).join('')}
        `;
      });
    }

    input.onkeyup = inputGetChar;
  });
}

function fromVirtualKbd() {
  const input = document.querySelector('.data-search');
  str = input.value;
  len = str.length;

  // data.then(data => {
  //   countriesFound = data.filter(item => {
  //     let country = item.country.toLowerCase();
  //     return country.slice(0, len) === str;
  //   })
  //
  //   return countriesFound;
  // })

  data.then((countriesFound) => {
    document.querySelector('.data-countries').innerHTML = `
          ${countriesFound.map(getCardCountry).join('')}
        `;
  });
}
