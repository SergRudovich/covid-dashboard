export {getDom}

function getDom(){
    const root = document.querySelector('#root');

    const header = document.createElement('header');
    header.classList.add('header');
    
    const map = document.createElement('div');
    map.classList.add('map')

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const wrapperInner = document.createElement('div');
    wrapperInner.classList.add('wrapper__inner');

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

    scheduleMain.innerHTML = `
        <div class="control-buttons">
            <button data-controlButtons="cases" class="button-cases">cases</button>
            <button data-controlButtons="deaths" class="button-deaths">deaths</button>
            <button data-controlButtons="recovered" class="button-recovered">recovered</button>
        </div>
        <div class="chart-container">
            <canvas id="chart"></canvas>
        </div>
    `;

    divSelect.append(choiceIndicator);


    dataArticle.append(globalCasesCounter);
    dataArticle.append(divSearch);
    dataArticle.append(divSelect);
    dataArticle.append(divData);

    wrapperInner.append(divStatistics,scheduleMain);
    wrapper.append(map, wrapperInner)

    root.append(dataArticle,wrapper)

    document.body.append(header, root);
}
