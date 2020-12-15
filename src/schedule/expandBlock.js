export default function expandBlock(block) {
  const article = document.querySelector('.data-article');
  const statistics = document.querySelector('.data-statistics');
  const schedule = document.querySelector('.schedule-main');
  const map = document.querySelector('.map');
  const scheduleBtn = document.querySelector('.scheduleBtn');
  const mapBtn = document.querySelector('.mapBtn');
  const statisticBtn = document.querySelector('.statisticBtn');
  const articleBtn = document.querySelector('.articleBtn');

  const blocks = [article, statistics, schedule, map];

  function restoreBlocks() {
    blocks.forEach((element) => {
      element.classList.remove('hidden-block', 'expand-block');
    });
  }

  function expand(blk) {
    blocks.forEach((element) => {
      element.classList.add('hidden-block');
    });
    blk.classList.add('expand-block');
    blk.classList.remove('hidden-block');
  }

  switch (block) {
    case 'getSheludeStatistics':
      if (schedule.classList.contains('expand-block')) {
        restoreBlocks();
        scheduleBtn.firstChild.src = './expand.png';
      } else {
        expand(schedule);
        // scheduleBtn.style.left = '97%';
        scheduleBtn.firstChild.src = './collapse.png';
      }
      break;
    case 'getStatistics':
      if (statistics.classList.contains('expand-block')) {
        restoreBlocks();
        statisticBtn.firstChild.src = './expand.png';
      } else {
        expand(statistics);
        statisticBtn.firstChild.src = './collapse.png';
      }
      break;
    case 'getArticle':
      if (article.classList.contains('expand-block')) {
        restoreBlocks();
        articleBtn.firstChild.src = './expand.png';
      } else {
        expand(article);
        articleBtn.firstChild.src = './collapse.png';
      }
      break;
    case 'map':
      if (map.classList.contains('expand-block')) {
        restoreBlocks();
        mapBtn.firstChild.src = './expand.png';
      } else {
        expand(map);
        mapBtn.firstChild.src = './collapse.png';
      }
      break;
    default:
  }
}
