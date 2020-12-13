export {getCardCountry}
export {checkLengthNumer}

import {elem} from './selectStatistics';
import {str} from './searchCountry';
import {len} from './searchCountry';

function getCardCountry(data){

  if(str){
    let country = data.country.toLowerCase();
    if(country.slice(0, len) !== str) return;
  }

  return `
    <div class='card'>
      <span class='card__cases'>
        ${checkLengthNumer(data[elem])}
      </span>
      <span data-country='${data.country}'
            data-latLong='${data.lat}, ${data.long}'
      class='card__country ${small(data.country)}'>
        ${checkLengthString(data.country)}
      </span>
      <span>
        <img class='card__flag' src='${data.flag}' alt='flag'>
      </span>
    </div>
  `;
}

function checkLengthNumer(elem){
  let newElem = elem.toString();

  if(newElem.length == 6){
    return `${newElem.slice(0,3)},${newElem.slice(-3)}`;
  }

  if(newElem.length == 7){
    return `${newElem.slice(0,1)},${newElem.slice(1,4)},${newElem.slice(-3)}`;
  }

  if(newElem.length == 8){
    return `${newElem.slice(0,2)},${newElem.slice(2,5)},${newElem.slice(-3)}`;
  }
  return newElem;
}

function small(str){
  if(str.length > 8){
    return 'small';
  }
  return '';
}

function checkLengthString(elem){
  if(elem.length > 15){
    return elem.slice(0, 14);
  }
  return elem;
}
