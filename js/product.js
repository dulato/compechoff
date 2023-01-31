let catalog = document.getElementById('product_btn');
let listPro = document.querySelector('.product_pages');
let listShit = document.querySelector('.product_pages_shit');
catalog.addEventListener('click', function() {
    listPro.classList.toggle('enter');

    if (listPro.classList.contains('enter')) {
        listShit.classList.add('enter');
    }
    
    else {
        listShit.classList.remove('enter');
    }
});


let depart = document.querySelectorAll('.product_pages_li_h');
let link = document.getElementById('link-pro');
let btnContent = document.querySelector('.product_btn_additon');
let linkBtn = document.getElementById('btn_additon_p');
let content = document.querySelectorAll('.product_2_main_content');
let searchDepart = document.querySelectorAll('.link-search');
for (let d = 0; d < depart.length; d++) {
    depart[d].addEventListener('click', function() {
        for (let n of depart) {
            n.classList.remove('log');
        }
        for (let k of content) {
            k.classList.remove('log');
            k.classList.remove('filter_all');
        }
        depart[d].classList.add('log');
        content[d].classList.add('log');
        btnContent.classList.add('log');

        link.innerText = depart[d].innerText;
        linkBtn.innerText = depart[d].innerText;

        // listShit.classList.remove('enter');
        // listPro.classList.remove('enter');
    });

    if (depart[d].classList.contains('log')) {
        link.innerText = depart[d].innerText;
        linkBtn.innerText = depart[d].innerText;
    }
}

for (let m = 0; m < searchDepart.length; m++) {
    searchDepart[m].addEventListener('click', function() {
        for (let n of depart) {
            n.classList.remove('log');
        }
        for (let n of searchDepart) {
            n.classList.remove('shine');
        }
        for (let k of content) {
            k.classList.remove('log');
            k.classList.remove('filter_all');
        }
        searchDepart[m].classList.add('shine');
        depart[m].classList.add('log');
        content[m].classList.add('log');
        btnContent.classList.add('log');
        link.innerText = depart[m].innerText;
        linkBtn.innerText = depart[m].innerText;
    
        if (depart[m].classList.contains('log')) {
            link.innerText = depart[m].innerText;
            linkBtn.innerText = depart[m].innerText;
        }
    });
}

let x = document.getElementById('btn_additon_x');
x.addEventListener('click', function() {
    link.innerText = '';
    linkBtn.innerText = '';
    btnContent.classList.remove('log');
    document.getElementById('search_input').value = '';

    for (let n of depart) {
        n.classList.remove('log');
    }

    for (let k of content) {
        k.classList.remove('log');
        k.classList.add('filter_all');
    }

    for (let n of searchDepart) {
        n.classList.remove('shine');
    }
});

let sort = document.querySelector('#btn_sort_p');
let so = document.querySelector('#btn_sort_btn');
let listSort = document.querySelector('.btn_sort_list');
sort.addEventListener('click', function() {
    sort.classList.toggle('sort');

    if (sort.classList.contains('sort')) {
        listSort.classList.add('sort');
        listShit.classList.add('enter');
    }

    else {
        listSort.classList.remove('sort');
        listShit.classList.remove('enter');
    }
});

so.addEventListener('click', function() {
    so.classList.toggle('sort');

    if (so.classList.contains('sort')) {
        listSort.classList.add('sort');
        listShit.classList.add('enter');
    }

    else {
        listSort.classList.remove('sort');
        listShit.classList.remove('enter');
    }
});

let lisort = document.querySelectorAll('.btn_sort_li');
for (let li = 0; li < lisort.length; li++) {
    lisort[li].addEventListener('click', function() {
        let newElems = document.getElementById('btn_sort_li');
        let reverseElem = document.querySelectorAll('.product_2_main_block');

        for (const lin of lisort) {
            lin.classList.remove('sort');
        }

        lisort[li].classList.add('sort');
        listSort.classList.remove('sort');
        sort.classList.remove('sort');
        so.classList.remove('sort');
        listShit.classList.remove('enter');

        if (newElems.classList.contains('sort')) {
            n = reverseElem.length;
            for (let s = 0; s < reverseElem.length; s++) {     
                reverseElem[s].style.cssText = `order: ${n};`;
                n--;           
            }
        }

        else {
            for (let s = 0; s < reverseElem.length; s++) {     
                reverseElem[s].style.cssText = `order: ${s+1};`;                
            }
        }
    });
}

listShit.addEventListener('click', function() {
    listShit.classList.remove('enter');
    listPro.classList.remove('enter');
    listSort.classList.remove('sort');
    sort.classList.remove('sort');
    so.classList.remove('sort');
});


