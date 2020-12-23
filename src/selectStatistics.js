import { getCardCountry } from './getCardCountry';

export { selectStatistics };
export { elem };

let elem = 'cases';
async function selectStatistics(data) {
  const newData = await data;

  const select = document.querySelector('.choice-indicator');
  const dataCountries = document.querySelector('.data-countries');

  select.onchange = function () {
    elem = this.value;
    newData.sort((a, b) => b[elem] - a[elem]);

    dataCountries.innerHTML = `
            ${newData.map(getCardCountry).join('')}
        `;
  };
}
