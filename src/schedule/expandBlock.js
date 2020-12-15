export { expandBlock }

function expandBlock(block) {
    const article = document.querySelector('.data-article');
    const statistics = document.querySelector('.data-statistics');
    const schedule = document.querySelector('.schedule-main');
    const scheduleBtn = document.querySelector('.scheduleBtn');
    const map = document.querySelector('.map');

    let blocks = [article, statistics, schedule, map];

    switch (block) {
        case 'getSheludeStatistics':
            if (schedule.classList.contains('expand-block')) {
                restoreBlocks();
                // scheduleBtn.firstChild.src = 'expand.svg';
            } else {
                expandBlock(schedule);
                // scheduleBtn.style.left = '97%';
                // scheduleBtn.firstChild.src = 'collapse.svg';
            };
            break;
        case 'getStatistics':
            if (statistics.classList.contains('expand-block')) {
                restoreBlocks();
            } else {
                expandBlock(statistics);
            };
            break;
        case 'getArticle':
            if (article.classList.contains('expand-block')) {
                restoreBlocks();
            } else {
                expandBlock(article);
            };
            break;
        case 'map':
            if (map.classList.contains('expand-block')) {
                restoreBlocks();
            } else {
                expandBlock(map);
            };
            break;
    }

    function restoreBlocks() {
        blocks.forEach(element => {
            element.classList.remove('hidden-block', 'expand-block');
        });
    }

    function expandBlock(blk) {
        blocks.forEach(element => {
            element.classList.add('hidden-block');
        });
        blk.classList.add('expand-block')
        blk.classList.remove('hidden-block');
    }

}