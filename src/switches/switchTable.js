export const switchTable = () => {
  const nav = document.querySelector('.data-statistics');
  nav.addEventListener('click', (event) => {
    const countryBlock = document.querySelectorAll('.country-table')
    if (event.target.classList.contains('country-stat')) {
      countryBlock[0].classList.remove('country-table-close')
      countryBlock[1].classList.remove('country-table-math-show')
    }
    if (event.target.classList.contains('country-math')) {
      countryBlock[0].classList.add('country-table-close')
      countryBlock[1].classList.add('country-table-math-show')
    }
  })
};