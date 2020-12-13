export { expandBlock }

function expandBlock(block) {
    const article = document.querySelector('.data-article');
    const statistics = document.querySelector('.data-statistics');
    const schedule = document.querySelector('.schedule-main');

    switch (block) {
        case 'getSheludeStatistics':
            if (schedule.classList.contains('expand-block')) {
                article.classList.remove('hidden-block');
                statistics.classList.remove('hidden-block');
                schedule.classList.remove('expand-block');
            } else {
                article.classList.add('hidden-block');
                statistics.classList.add('hidden-block');
                schedule.classList.add('expand-block');
            };
            break;
        case 'getStatistics':
            if (statistics.classList.contains('expand-block')) {
                article.classList.remove('hidden-block');
                statistics.classList.remove('expand-block');
                schedule.classList.remove('hidden-block');
            } else {
                article.classList.add('hidden-block');
                statistics.classList.add('expand-block');
                schedule.classList.add('hidden-block');
            };
            break;

    }



}