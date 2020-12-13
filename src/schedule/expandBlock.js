export { expandBlock }

function expandBlock(block) {
    const article = document.querySelector('.data-article');
    const statistics = document.querySelector('.data-statistics');
    const schedule = document.querySelector('.schedule-main');
    const expandButton = document.querySelectorAll('.button-expand');

    switch (block) {
        case 'getSheludeStatistics':
            if (schedule.classList.contains('expand-block')) {
                article.classList.remove('hidden-block');
                statistics.classList.remove('hidden-block');
                schedule.classList.remove('expand-block');
                expandButton[0].style.left = '95%';
            } else {
                article.classList.add('hidden-block');
                statistics.classList.add('hidden-block');
                schedule.classList.add('expand-block');
                expandButton[0].style.left = '97%';
            };
            break;

        case 'getStatistics':
            if (statistics.classList.contains('expand-block')) {
                article.classList.remove('hidden-block');
                statistics.classList.remove('expand-block');
                schedule.classList.remove('hidden-block');
                expandButton[2].style.left = '90%';
            } else {
                article.classList.add('hidden-block');
                statistics.classList.add('expand-block');
                schedule.classList.add('hidden-block');
                expandButton[2].style.left = '97%';
            };
            break;
        case 'getArticle':
            if (article.classList.contains('expand-block')) {
                article.classList.remove('expand-block');
                statistics.classList.remove('hidden-block');
                schedule.classList.remove('hidden-block');
                expandButton[1].style.left = '200px';
            } else {
                article.classList.add('expand-block');
                statistics.classList.add('hidden-block');
                schedule.classList.add('hidden-block');
                expandButton[1].style.left = '97%';
            };
            break;
    }



}