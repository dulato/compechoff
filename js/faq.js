
let accoss = document.querySelectorAll('.accordion_title');
for (let i=0; i<accoss.length; i++) {
    accoss[i].onclick = function () {
        if (accoss[i].classList.contains('active')) {
            accoss[i].classList.remove('active');
        }
        else {
            for (const i of accoss) {
                i.classList.remove('active');
            }
            accoss[i].classList.add('active');
        }
    }
}



