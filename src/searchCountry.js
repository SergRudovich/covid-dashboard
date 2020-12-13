export {searchCountry}
export {str}
export {len}

import {getCardCountry} from './getCardCountry';

let str = '';
let len = 0;
let countriesFound = [];


function searchCountry(data){

  // document.onclick = function(e) {
  document.addEventListener('click', function(e){

    if(e.target.className !== 'data-search') return;
    let input = document.querySelector('.data-search');

    input.onkeyup = function(){

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
  });
}
