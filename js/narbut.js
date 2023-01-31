let chapter = document.querySelectorAll('.main_3_narbutas_link');
let sections = document.querySelectorAll('.main_1_narbutas_content');
for (let i = 0; i < chapter.length; i++) {
    chapter[i].onclick = function () {
        for (const j of chapter) {
            if (j.classList.contains('active')) {
                j.classList.remove('active');
            }
        }

        for (const k of sections) {
            if (k.classList.contains('showMe')) {
                k.classList.remove('showMe');
            }
        }

        chapter[i].classList.add('active');
        sections[i].classList.add('showMe');
    }    
}


