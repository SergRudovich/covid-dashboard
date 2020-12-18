import { elem } from './selectStatistics';
import { str, len } from './searchCountry';

export { getCardCountry };
export { checkLengthNumer };

function getCardCountry(data) {
  if (str) {
    const country = data.country.toLowerCase();
    if (country.slice(0, len) !== str) return;
  }

  return `
    <div class='card'>
      <div class='card__wrapper'>
        <span>
          <img class='card__flag' src='${data.flag}' alt='flag'>
        </span>
        <span data-country='${data.country}'
        data-latLong='${data.lat}, ${data.long}'
        class='card__country ${small(data.country)}'>
        ${checkLengthString(data.country)}
        </span>
      </div>
      <span class='card__cases'>
        ${checkLengthNumer(data[elem])}
      </span>
    </div>
  `;
}

function checkLengthNumer(elem) {
  const newElem = elem.toString();

  if (newElem.length == 6) {
    return `${newElem.slice(0, 3)},${newElem.slice(-3)}`;
  }

  if (newElem.length == 7) {
    return `${newElem.slice(0, 1)},${newElem.slice(1, 4)},${newElem.slice(-3)}`;
  }

  if (newElem.length == 8) {
    return `${newElem.slice(0, 2)},${newElem.slice(2, 5)},${newElem.slice(-3)}`;
  }
  return newElem;
}

function small(str) {
  if (str.length > 8) {
    return 'small';
  }
  return '';
}

function checkLengthString(elem) {
  if (elem.length > 15) {
    return elem.slice(0, 14);
  }
  return elem;
}
