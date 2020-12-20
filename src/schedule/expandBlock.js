export default function expandBlock(block) {
  const article = document.querySelector('.data-article');
  const statistics = document.querySelector('.data-statistics');
  const schedule = document.querySelector('.schedule-main');
  const map = document.querySelector('.map');
  const scheduleBtn = document.querySelector('.scheduleBtn');
  const mapBtn = document.querySelector('.mapBtn');
  const statisticBtn = document.querySelector('.statisticBtn');
  const articleBtn = document.querySelector('.articleBtn');
  const wrapperInner = document.querySelector('.wrapper__inner');
  const wrapper = document.querySelector('.wrapper');
  const canvas = document.querySelector('canvas');

  const blocks = [article, statistics, schedule, map];

  function restoreBlocks(blkBtn) {
    blkBtn.firstChild.src = './expand.png';
    wrapperInner.style.height = '40%';
    wrapper.style.width = '78%';

    blocks.forEach((element) => {
      element.classList.remove('hidden-block', 'expand-block');
    });
  }

  function expand(blk, blkBtn) {
    blkBtn.firstChild.src = './collapse.png';
    wrapperInner.style.height = '100%';
    wrapper.style.width = '100%';
    blocks.forEach((element) => {
      element.classList.add('hidden-block');
    });
    blk.classList.add('expand-block');
    blk.classList.remove('hidden-block');
  }

  switch (block) {
    // график
    case 'getSheludeStatistics':
      if (schedule.classList.contains('expand-block')) {
        restoreBlocks(scheduleBtn);
        canvas.style.maxWidth = '420px';
      } else {
        expand(schedule, scheduleBtn);
        canvas.style.maxWidth = '80%';
      }
      break;
    // таблица
    case 'getStatistics':
      if (statistics.classList.contains('expand-block')) {
        restoreBlocks(statisticBtn);
      } else {
        expand(statistics, statisticBtn);
      }
      break;
    // список
    case 'getArticle':
      if (article.classList.contains('expand-block')) {
        wrapper.classList.remove('hidden-block');
        restoreBlocks(articleBtn);
      } else {
        wrapper.classList.add('hidden-block');
        expand(article, articleBtn);
      }
      break;
    // карта
    case 'map':
      if (map.classList.contains('expand-block')) {
        restoreBlocks(mapBtn);
      } else {
        expand(map, mapBtn);
      }
      break;
    default:
  }
}
