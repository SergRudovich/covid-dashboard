export const toggleTable = () => {
  const toggle = document.querySelector('.toggle');
  const toggleTitles = document.querySelectorAll('.toggle__title');

  const dataStat = document.querySelector('.data-statistics');
  const schedule = document.querySelector('.schedule-main');

  toggle.addEventListener('click', (event) => {
    if (event.target.textContent === 'Table') {
      toggleTitles[0].classList.remove('toggle__title-inactive');
      toggleTitles[1].classList.add('toggle__title-inactive');
      schedule.classList.remove('schedule-main-open');
      dataStat.classList.remove('data-statistics-close');
    } else {
      toggleTitles[0].classList.add('toggle__title-inactive');
      toggleTitles[1].classList.remove('toggle__title-inactive');
      schedule.classList.add('schedule-main-open');
      dataStat.classList.add('data-statistics-close');
    }
  });
};
