export { showStatisticsCountry }


async function showStatisticsCountry(data) {
  let dataTwo = await data;
  let country = null;

  document.addEventListener('click', (e) => {
    if (e.target.dataset.country) {
      country = e.target.dataset.country;

      let elem = dataTwo.filter(i => i.country === country);
      let elemThree = Object.values(...elem);


      let divStatistics = document.querySelector('.data-statistics');
      divStatistics.innerHTML = `
      <a  class="button-expand statisticBtn"><img data-controlButtons="expandStatistics" src='./expand.png'/></a>
      <div class="control-buttons">
        <input checked type="radio" name="data-stat" id="country-stat">
        <label class="country-stat" for="country-stat">All stat</label>
        <input type="radio" name="data-stat" id="country-math">
        <label class="country-math" for="country-math">One Hundred</label>
      </div>
            <div class="country-table">
              <div class='statistics statistics-country'>
                <span class='statistics-desc'>Coutry:</span> 
                <span>${elemThree[0]}</span>  
              </div>     
              <div class='statistics statistics-deaths'>
                <span class='statistics-desc'>Deaths:</span>
                <span>${elemThree[1]}</span>
              </div>     
              <div class='statistics statistics-cases'>
                <span class='statistics-desc'>Cases:</span>
                <span>${elemThree[2]}</span>
              </div>     
              <div class='statistics statistics-recovered'>
                <span class='statistics-desc'>Recovered:</span>
                <span>${elemThree[3]}</span>
              </div>     
              <div class='statistics statistics-tyday-c'>
                <span class='statistics-desc'>Today cases: </span>
                <span>${elemThree[4]}</span>
              </div>     
              <div class='statistics statistics-tyday-d'>
                <span class='statistics-desc'>Today deaths: </span>
                <span>${elemThree[5]}</span>
              </div>     
              <div class='statistics statistics-tyday-r'>
                <span class='statistics-desc'>Today recovered: </span>
                <span>${elemThree[6]}</span>
              </div>
            </div>     
            <div class="country-table country-table-math">
              <div class='statistics statistics-country'>
                <span class='statistics-desc'>Coutry:</span> 
                <span>${elemThree[0]}</span>  
              </div>
              <div class='statistics statistics-CONT'>
                <span class='statistics-desc'>Case one hundred thousand</span>
                <span>${elemThree[7]}</span>
              </div>
              <div class='statistics statistics-DONT'>
                <span class='statistics-desc'>Deaths one hundred thousand</span>
                <span>${elemThree[8]}</span>
              </div> 
              <div class='statistics statistics-RONT'>
                <span class='statistics-desc'>Recovered one hundred thousand</span>
                <span>${elemThree[9]}</span>
              </div>
            </div>
      `;
    }
  })

}

