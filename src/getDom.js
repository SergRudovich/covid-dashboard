export {getDom}

function getDom(){

    let globalCasesCounter = document.createElement('div');
    globalCasesCounter.classList.add('global-case-counter');

    let divSearch = document.createElement('input');
    divSearch.classList.add('data-search');
    divSearch.placeholder = 'введите название страны';

    let dataArticle = document.createElement('article');
    dataArticle.classList.add('data-article');

    let divData = document.createElement('div');
    divData.classList.add('data-countries');

    let divStatistics = document.createElement('div');
    divStatistics.classList.add('data-statistics');

    let divSelect = document.createElement('div');
    divSelect.classList.add('container-choice-indicator');

    let choiceIndicator = document.createElement('select');
    choiceIndicator.classList.add('choice-indicator');

    let scheduleMain = document.createElement('div');
    scheduleMain.classList.add('schedule-main');

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

    document.body.append(scheduleMain);

    // карта
    let mapContainer = document.createElement('div');
    mapContainer.classList.add('map-container');
    mapContainer.innerHTML = `
      <div id="sample"></div>
    `;

    document.body.append(mapContainer);

    divSelect.append(choiceIndicator);


    dataArticle.append(globalCasesCounter);
    dataArticle.append(divSearch);
    dataArticle.append(divSelect);
    dataArticle.append(divData);

    document.body.append(dataArticle);
    document.body.append(divStatistics);

}
