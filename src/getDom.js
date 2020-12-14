export { getDom }

function getDom(){
    const root = document.querySelector('#root');

    const header = document.createElement('header');
    header.classList.add('header');

    const footer = document.createElement('footer')
    footer.classList.add('footer');
    const map = document.createElement('div');
    map.classList.add('map')

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

    toggle.innerHTML = `
        <h2 class="toggle__title">Table</h2><h2 class="toggle__title toggle__title-inactive">Schedule</h2>
    `

    scheduleMain.innerHTML = `
        <div class="control-buttons">
            <button data-controlButtons="cases" class="button-cases">cases</button>
            <button data-controlButtons="deaths" class="button-deaths">deaths</button>
            <button data-controlButtons="recovered" class="button-recovered">recovered</button>
            <a  class="button-expand"><img data-controlButtons="expandSchedule" src="expand.svg"/></a>
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


//     document.body.append(scheduleMain);

    // карта
    let mapContainer = document.createElement('div');
    mapContainer.classList.add('map-container');
    mapContainer.innerHTML = `
      <div id="sample"></div>
    `;
//     document.body.append(mapContainer);



    divSelect.append(choiceIndicator);

    globalCasesCounter.innerHTML = `
        <button data-controlButtons="expandStatistics" class="button-expand">] [</button>
`;

    dataArticle.append(globalCasesCounter);
    dataArticle.append(divSearch);
    dataArticle.append(divSelect);
    dataArticle.append(divData);
  
    map.append(mapContainer)

    wrapperInner.append(toggle, divStatistics,scheduleMain);
    wrapper.append(map, wrapperInner)

    root.append(dataArticle,wrapper)

    document.body.append(header, root, footer);
}
