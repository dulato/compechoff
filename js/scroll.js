window.onscroll = function fixMe() {
    let head = document.querySelector('.header');

    if (window.pageYOffset > 50) {
        head.classList.add('fixMe');
    }

    else {
        head.classList.remove('fixMe');
    }
}



