let listBtn = document.querySelectorAll('.countries_menu_btn');
let catBtn = document.getElementById('country_btn');
let catalogList = document.querySelector('.countries_1_menu');
let showBtn = document.querySelector('.countries_2_button');
let content = document.querySelectorAll('.countries_2_main-hidden');
let btnCont = document.querySelector('.countries_2_btn');
let searchers = document.querySelectorAll('.link-search');

catBtn.addEventListener('click', function() {
    catBtn.classList.toggle('toselect');
    if (catBtn.classList.contains('toselect')) {
        catalogList.classList.add('toselect');
    }
    else {
        catalogList.classList.remove('toselect');
    }
});

for (let l = 0; l < listBtn.length; l++) {
    listBtn[l].addEventListener('click', function() {
        for (let j of listBtn) {
            j.classList.remove('shine')
        }

        for (let j of searchers) {
            j.classList.remove('shine');
        }

        listBtn[l].classList.add('shine');
        searchers[l+1].classList.add('shine');
        catalogList.classList.remove('toselect');
        catBtn.classList.remove('toselect');

        if (listBtn[l].classList.contains('desks')) {
            for (let des of content) {
                if (des.classList.contains('desks')) {
                    des.classList.remove('hide');
                    btnCont.classList.add('without');
                }
                else {
                    des.classList.add('hide');
                }
            }
        }

        else if (listBtn[l].classList.contains('cupboards')) {
            for (let des of content) {
                if (des.classList.contains('cupboards')) {
                    des.classList.remove('hide');
                    btnCont.classList.add('without');
                }
                else {
                    des.classList.add('hide');
                }
            }
        }

        else if (listBtn[l].classList.contains('solutions')) {
            for (let des of content) {
                if (des.classList.contains('solutions')) {
                    des.classList.remove('hide');
                    btnCont.classList.add('without');
                }
                else {
                    des.classList.add('hide');
                }
            }
        }

        else if (listBtn[l].classList.contains('soft')) {
            for (let des of content) {
                if (des.classList.contains('soft')) {
                    des.classList.remove('hide');
                    btnCont.classList.add('without');
                }
                else {
                    des.classList.add('hide');
                }
            }
        }

        else if (listBtn[l].classList.contains('directors')) {
            for (let des of content) {
                if (des.classList.contains('directors')) {
                    des.classList.remove('hide');
                    btnCont.classList.add('without');
                }
                else {
                    des.classList.add('hide');
                }
            }
        }

        else if (listBtn[l].classList.contains('funiture')) {
            for (let des of content) {
                if (des.classList.contains('funiture')) {
                    des.classList.remove('hide');
                    btnCont.classList.add('without');
                }
                else {
                    des.classList.add('hide');
                }
            }
        }

        else {
            for (let d of content) {
                d.classList.add('hide');
                btnCont.classList.remove('without');
            }
            content[0].classList.remove('hide');
            showBtn.classList.remove('showme');
            showBtn.textContent = 'Показать все';
            
            for (let j of searchers) {
                j.classList.remove('shine');
            }
        }
    });
}

for (let k = 0; k < searchers.length; k++) {
    searchers[k].addEventListener('click', function() {
        for (let j of searchers) {
            j.classList.remove('shine');
        }

        for (let j of listBtn) {
            j.classList.remove('shine')
        }

        searchers[k].classList.add('shine');
        listBtn[k-1].classList.add('shine');

        if (searchers[k].classList.contains('desks')) {
            for (let des of content) {
                if (des.classList.contains('desks')) {
                    des.classList.remove('hide');
                    btnCont.classList.add('without');
                }
                else {
                    des.classList.add('hide');
                }
            }
        }

        else if (searchers[k].classList.contains('cupboards')) {
            for (let des of content) {
                if (des.classList.contains('cupboards')) {
                    des.classList.remove('hide');
                    btnCont.classList.add('without');
                }
                else {
                    des.classList.add('hide');
                }
            }
        }

        else if (searchers[k].classList.contains('solutions')) {
            for (let des of content) {
                if (des.classList.contains('solutions')) {
                    des.classList.remove('hide');
                    btnCont.classList.add('without');
                }
                else {
                    des.classList.add('hide');
                }
            }
        }

        else if (searchers[k].classList.contains('soft')) {
            for (let des of content) {
                if (des.classList.contains('soft')) {
                    des.classList.remove('hide');
                    btnCont.classList.add('without');
                }
                else {
                    des.classList.add('hide');
                }
            }
        }

        else if (searchers[k].classList.contains('directors')) {
            for (let des of content) {
                if (des.classList.contains('directors')) {
                    des.classList.remove('hide');
                    btnCont.classList.add('without');
                }
                else {
                    des.classList.add('hide');
                }
            }
        }

        else if (searchers[k].classList.contains('funiture')) {
            for (let des of content) {
                if (des.classList.contains('funiture')) {
                    des.classList.remove('hide');
                    btnCont.classList.add('without');
                }
                else {
                    des.classList.add('hide');
                }
            }
        }

        else {
            for (let d of content) {
                d.classList.add('hide');
                btnCont.classList.remove('without');
            }
            content[0].classList.remove('hide');
            showBtn.classList.remove('showme');
            showBtn.textContent = 'Показать все';
            searchers[k].classList.remove('shine');
        }
    });
}

showBtn.addEventListener('click', function() {
    showBtn.classList.toggle('showme');

    if (showBtn.classList.contains('showme')) {
        showBtn.textContent = 'Скрыть все';
        for (let c of content) {
            c.classList.remove('hide');
        }
    }

    else {
        showBtn.textContent = 'Показать все';
        for (let c of content) {
            c.classList.add('hide');
        }
        content[0].classList.remove('hide');
    }
});



