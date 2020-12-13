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
            <div class='statistics statistics-country'>
              <span class='statistics-desc'>coutry:</span> 
              <span>${elemThree[0]}</span>  
            </div>     
            <div class='statistics statistics-deaths'>
              <span class='statistics-desc'>deaths:</span>
              <span>${elemThree[1]}</span>
             </div>     
            <div class='statistics statistics-cases'>
              <span class='statistics-desc'>cases:</span>
              <span>${elemThree[2]}</span>
            </div>     
            <div class='statistics statistics-recovered'>
              <span class='statistics-desc'>recovered:</span>
              <span>${elemThree[3]}</span>
             </div>     
            <div class='statistics statistics-tyday-c'>
              <span class='statistics-desc'>tyday cases: </span>
              <span>${elemThree[4]}</span>
            </div>     
            <div class='statistics statistics-tyday-d'>
              <span class='statistics-desc'>tyday deaths: </span>
              <span>${elemThree[5]}</span>
            </div>     
            <div class='statistics statistics-tyday-r'>
              <span class='statistics-desc'>tyday recovered: </span>
              <span>${elemThree[6]}</span>
            </div>     
            <div class='statistics statistics-CONT'>
                <span class='statistics-desc'>case one hundred thousand</span>
                <span>${elemThree[7]}</span>
            </div>
            <div class='statistics statistics-DONT'>
                <span class='statistics-desc'>deaths one hundred thousand</span>
                <span>${elemThree[8]}</span>
            </div> 
            <div class='statistics statistics-RONT'>
                <span class='statistics-desc'>recovered one hundred thousand</span>
                <span>${elemThree[9]}</span>
            </div>     
      `;
    }
  })

}

