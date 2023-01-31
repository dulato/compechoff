let body = document.body;
let modMenu = document.getElementById('modal_menu');
let header = document.querySelector('.header');
let darkMain = document.querySelector('.main');
let darkFooter = document.querySelector('.footer');
let prolink = document.querySelector('.menu_link_pro');
let input = document.getElementById('search_input');
let histor = document.querySelector('.links_search');
prolink.addEventListener('click', function () {
    header.classList.add('fixed');
    prolink.classList.add('active');
    modMenu.classList.add('active');
    darkMain.classList.add('dark');
    darkFooter.classList.add('dark');
});

let searchMenu = document.querySelector('.search_modal');
let search = document.getElementById('search_op');
search.addEventListener('click', function() {
    header.classList.add('fixed');
    search.classList.add('active');
    searchMenu.classList.add('active');
    darkMain.classList.add('dark');
    darkFooter.classList.add('dark');
});

let searcher = document.getElementById('search_mob');
searcher.addEventListener('click', function() {
    header.classList.add('fixed');
    searcher.classList.add('active');
    searchMenu.classList.add('active');
    darkMain.classList.add('dark');
    darkFooter.classList.add('dark');
    body.classList.add('lock')
});

let about = document.querySelector('.menu_link_abo');
let aboutLi = document.querySelector('.about_modal');
about.addEventListener('click', function() {
    header.classList.add('fixed');
    about.classList.add('active');
    aboutLi.classList.add('view');
    darkMain.classList.add('dark');
    darkFooter.classList.add('dark');
});

window.addEventListener('click', closeMod);
function closeMod (e) {
    if (e.target == modMenu) {
        prolink.classList.remove('active');
        modMenu.classList.remove('active');
        header.classList.remove('fixed');
        darkMain.classList.remove('dark');
        darkFooter.classList.remove('dark');
    }
    if (e.target == searchMenu) {
        search.classList.remove('active');
        searcher.classList.remove('active');
        searchMenu.classList.remove('active');
        header.classList.remove('fixed');
        darkMain.classList.remove('dark');
        darkFooter.classList.remove('dark');
        body.classList.remove('lock');
        histor.classList.add('none');
    }
    if (e.target == aboutLi) {
        header.classList.remove('fixed');
        aboutLi.classList.remove('view');
        darkMain.classList.remove('dark');
        darkFooter.classList.remove('dark');
        about.classList.remove('active');
    }
}

let links = document.querySelectorAll('.modal_menu_link');
let link_blocks = document.querySelectorAll('.modal_menu_link_content');
for (let i=0; i < links.length; i++) {
    links[i].onclick = function () {
        for (const j of links) {
            if (j.classList.contains('active')){
                j.classList.remove('active');
            }
        }
        for (const n of link_blocks) {
            if (n.classList.contains('show_block')) {
                n.classList.remove('show_block');
            }
        }
        links[i].classList.add('active');
        link_blocks[i].classList.add('show_block');
    }
}

let linkBlock = document.querySelectorAll('.modal_menu_link_content .modal_menu_right_block');
for (const m of linkBlock) {
    m.onclick = function() {
        l.classList.remove('active');
        modMenu.classList.remove('active');
    }
}

let burger = document.querySelector('.nav_burger');
let nav = document.querySelector('.nav_fixed');
burger.addEventListener('click', function() {
    burger.classList.toggle('active');

    if (burger.classList.contains('active')) {
        header.classList.add('fixed');
        nav.classList.add('show');
        body.classList.add('lock')
    }

    else {
        header.classList.remove('fixed');
        nav.classList.remove('show');
        body.classList.remove('lock')
    }
});

let myBtn = document.querySelector('.nav_button');
myBtn.addEventListener('click', function() {
    header.classList.remove('fixed');
    nav.classList.remove('show');
    burger.classList.remove('active');
});

let listLinks = document.querySelectorAll('.link-search');
input.addEventListener('input', function() {
    histor.classList.remove('none');
    let val = input.value.trim().toUpperCase();

    if (val != '') {
        listLinks.forEach(function (element) {
            if (element.innerText.search(val) == -1) {
                element.classList.add('hide');
            }
            else {
                element.classList.remove('hide');
            }
        });
    } 
    else {
        listLinks.forEach(function (element) {
            element.classList.remove('hide');
        });
    }
});
input.addEventListener('change', function() {
    histor.classList.add('none');
});

for (let iterator of listLinks) {
    iterator.addEventListener('click', function() {
        input.value = iterator.innerText;
        histor.classList.add('none');
        search.classList.remove('active');
        searcher.classList.remove('active');
        searchMenu.classList.remove('active');
        header.classList.remove('fixed');
        darkMain.classList.remove('dark');
        darkFooter.classList.remove('dark');
        body.classList.remove('lock');
    });
}




