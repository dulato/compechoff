let pp = document.querySelectorAll('.main_4_text_hidden');
let bt = document.getElementById('main_4_list_btn');

bt.addEventListener('click', () => {
    bt.classList.toggle('show');

    if (bt.classList.contains('show')) {
        bt.innerText = 'Скрыть';
        for (let i = 0; i < pp.length; i++) {
            pp[i].classList.remove('hide');
        }
    }

    else {
        bt.innerText = 'Развернуть';
        for (let j = 0; j < pp.length; j++) {
            pp[j].classList.add('hide');
        }
    }
});


