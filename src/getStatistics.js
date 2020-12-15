import { getCardCountry, checkLengthNumer } from './getCardCountry';

export { getStatistics };

const obj = {
  deaths: 0,
  recovered: 0,
  cases: 0,
  'today cases': 0,
  'today deaths': 0,
  'today recovered': 0,
};

async function getStatistics(data) {
  const dataF = await data;
  dataF.sort((a, b) => b.cases - a.cases);

  dataF.forEach((i) => {
    obj.cases += i.cases;
    obj.deaths += i.deaths;
    obj.recovered += i.recovered;
    obj['today cases'] += i.todayCases;
    obj['today deaths'] += i.todayDeaths;
    obj['today recovered'] += i.todayRecovered;
  });

  const globalCasesNumbers = dataF.map((i) => i.cases);
  const globalCases = globalCasesNumbers.reduce((a, b) => a + b);

  // общее количество заражённых
  document.querySelector('.global-case-counter').innerHTML = `
  <a  class="button-expand articleBtn"><img data-controlButtons="expandArticle" src='./expand.png'/></a>
    <div class='description'>Global Cases</div>
    <div class='counter'>${globalCases}</div>
  `;

  // список заражений + страны
  document.querySelector('.data-countries').innerHTML = `
    ${dataF.map(getCardCountry).join('')}
  `;

  // общая статистика в таблице
  document.querySelector('.data-statistics').innerHTML += `
  <a  class="button-expand statisticBtn"><img data-controlButtons="expandStatistics" src='./expand.png'/></a>
    ${Object.entries(obj).map(getAllStatistics).join('')}
  `;

  // селектор показателей
  const selects = ['cases', 'deaths', 'recovered'];
  document.querySelector('.choice-indicator')
    .innerHTML = selects.map(getSelects).join('');
}

function getSelects(select) {
  return `
    <option dataset.select='${select}'>${select}</option>
  `;
}

function getAllStatistics(i) {
  return `
    <div class='statistics-country'>
      <span class='statistics-desc'>${i[0]}</span>
      <span>${checkLengthNumer(i[1])}</span>
    </div>
  `;
}
