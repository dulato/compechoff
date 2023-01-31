const newsBtn = document.getElementById('main_1_news_button');
newsBtn.addEventListener('click', showBlocks);
function showBlocks() {
    let hideBl = document.querySelectorAll('.main_1_news_block_hide');
    for (const i of hideBl) {
        if (i.classList.contains('hidden')) {
            newsBtn.innerHTML = 'Скрыть все';
            i.classList.remove('hidden');
        }
        else {
            newsBtn.innerHTML = 'Все новости';
            i.classList.add('hidden');
        }
    }
}