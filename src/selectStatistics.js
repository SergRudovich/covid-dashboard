export {selectStatistics}
export {elem}

import {getCardCountry} from './getCardCountry';


let elem = 'cases';
async function selectStatistics(data){
    let newData = await data;


    let select = document.querySelector('.choice-indicator');
    let dataCountries = document.querySelector('.data-countries');

    select.onchange = function(){
        elem = this.value;
        newData.sort((a, b) => b[elem] - a[elem]);


        dataCountries.innerHTML = `
            ${newData.map(getCardCountry).join('')}
        `;
    }
}
