export { getDom };

function getDom() {
  const root = document.querySelector('#root');

  const header = document.createElement('header');
  header.classList.add('header');

  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const map = document.createElement('div');
  map.classList.add('map');

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const wrapperInner = document.createElement('div');
  wrapperInner.classList.add('wrapper__inner');

  const toggle = document.createElement('div');
  toggle.classList.add('toggle');

  const globalCasesCounter = document.createElement('div');
  globalCasesCounter.classList.add('global-case-counter');

  const divSearch = document.createElement('input');
  divSearch.classList.add('data-search');
  divSearch.placeholder = 'введите название страны';

  const dataArticle = document.createElement('article');
  dataArticle.classList.add('data-article');

  const divData = document.createElement('div');
  divData.classList.add('data-countries');

  const divStatistics = document.createElement('div');
  divStatistics.classList.add('data-statistics');

  const divSelect = document.createElement('div');
  divSelect.classList.add('container-choice-indicator');

  const choiceIndicator = document.createElement('select');
  choiceIndicator.classList.add('choice-indicator');

  const scheduleMain = document.createElement('div');
  scheduleMain.classList.add('schedule-main');

  header.innerHTML = `
        <h1 class="header__title">COVID-19 Dashboard</h1>
    `;

    header.addEventListener('click', (event)=> {
      if (event.target.tagName === 'H1') location.reload();
    })

  toggle.innerHTML = `
        <h2 class="toggle__title">Table</h2><h2 class="toggle__title toggle__title-inactive">Schedule</h2>
    `;
{/* <button data-controlButtons="expandSchedule" class="button-expand">] [</button> */}
  divStatistics.innerHTML = `
        <div class="control-buttons">
          <label for="global">global stat</label>
        </div>
    `;

  scheduleMain.innerHTML = `
        <div class="control-buttons">
            <input checked type="radio" name="schelude" id="cases">
            <label data-controlButtons="cases" for="cases">cases</label>
            <input type="radio" name="schelude" id="deaths">
            <label data-controlButtons="deaths" for="deaths">deaths</label>
            <input type="radio" name="schelude" id="recovered">
            <label data-controlButtons="recovered" for="recovered">recovered</label>
            <a  class="button-expand scheduleBtn"><img data-controlButtons="expandSchedule" src='./expand.png'/></a>
        </div>
        <div class="chart-container">
            <canvas id="chart"></canvas>
        </div>
    `;

  footer.innerHTML = `
        <div class="footer__info">
            <h4 class="footer__title">CONNECT WITH US:</h4>
            <div class="footer__authors">
                <p><a href="https://github.com/SergRudovich" target="blank">Sergey Rudovich</a></p>
                <p><a href="https://github.com/conservativ007" target="blank">Maks
                conservativ007</a></p>
                <p><a href="https://github.com/MaksimStseshanok" target="blank">Maksim Stseshanok</a></p>
            </div>
            <div class="footer__meta">
                <a href="https://rs.school/js/" target="blank"><img src="https://rs.school/images/rs_school_js.svg" alt="RS School"></a>
                <span class="footer__year">© 2020</span>
            </div>
        </div>

     `;

  // карта
  const mapContainer = document.createElement('div');
  mapContainer.classList.add('map-container');
  mapContainer.innerHTML = `
      <div id="sample"></div>
    `;

  // document.body.append(mapContainer);
  divSelect.append(choiceIndicator);


  dataArticle.append(globalCasesCounter);
  dataArticle.append(divSearch);
  dataArticle.append(divSelect);
  dataArticle.append(divData);

  map.innerHTML = `
  <a  class="button-expand mapBtn"><img data-controlButtons="expandMap" src='./expand.png'/></a>
`;
  map.append(mapContainer);

  wrapperInner.append(toggle, divStatistics, scheduleMain);
  wrapper.append(map, wrapperInner);

  root.append(dataArticle, wrapper);
  document.body.append(header, root, footer);
}
