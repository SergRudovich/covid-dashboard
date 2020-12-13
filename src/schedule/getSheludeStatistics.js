import {getSchedule} from './getSchedule';
import {expandBlock} from './expandBlock';
import chart from 'chart.js';
import axios from 'axios';

export {getSheludeStatistics};


async function getSheludeStatistics(){

  let country;
  let data;
  data = await getSchedule();
  // console.log(data)

  document.onclick = async function(e){

    // если нажата кнопка в графике (cases, recovered, deaths)
    if(e.target.dataset.controlbuttons){
      // получеам условие по которуму нужно сортировать (cases, recovered, deaths)
      let elem = e.target.dataset.controlbuttons;
      // передаём параметром условие
      if (elem === 'expandSchedule') expandBlock('getSheludeStatistics');
      if (elem === 'expandStatistics') expandBlock('getStatistics');
      getItem(elem);

      // очищаем старый график
      removeChaConfig(chartConfig);

    }

    if(e.target.dataset.country){
      // тоже самое что и выше только передаём условием выбранную страну
      country = e.target.dataset.country;

      // и тут её получаем
      let elem = await getSchedule(country);
      data = elem.timeline;

      getItem();
      removeChaConfig(chartConfig);
    }
  }


  function removeChaConfig({data: {datasets}}){
    datasets.shift();
    chart.update();
  }

//базовая настройка графика, остальное будем передавать параметрами
  const ctx = document.querySelector('#chart').getContext('2d');
  const chartConfig = {
    type: 'bar',
    data: {
      labels: [],
      datasets: [],
    },
    options: {
      title: {
        display: true,
        text: 'all countries',
      },
      scales: {
        yAxes: [{
          tics: {
            display: true,
            beginAtZero: true,
          },
          gridLines: {
            display: true,
          },

        }],
        xAxes: [{
          tics: {
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },

        }],

      },
      legend: {
        display: false,
      }
    }
  }
  const chart = new Chart(ctx, chartConfig);


  getItem();
  function getItem(item = 'cases'){

    let obj = {
      mounths: [],
      cases: [],
      deaths: [],
      recovered: [],
    }

    let elems = Object.entries(data[item]);

    elems.forEach((elem) => {
      obj[item].push(elem[1]);
      obj.mounths.push(elem[0]);
    })

    const newUser = {
      label: '2020',
      data: obj[item],
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      fill: false,
    };

    chartConfig.data.datasets.push(newUser);
    chartConfig.data.labels = obj.mounths;

    if(country){
      let text = `${country} - ${item} (last 180 days)`;
      chartConfig.options.title.text = text;
    }


    chart.update();

  }

}
