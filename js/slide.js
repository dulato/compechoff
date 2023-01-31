
$('.inner_1_main_left_slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: 'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    centerMode: false,
    rows: 1,
    swipe: false,
    // asNavFor: '.inner_1_main_left_slick',

    responsive: [
        {
            breakpoint: 600,
            settings: {
                swipe: true,
            },
        },
    ],
});
$('.inner_1_main_left_slick').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.inner_1_main_left_slider',
    arrows: false,
    dots: false,
    centerMode: false,
    infinite: true,
    focusOnSelect: true,
});

$(document).ready(function() {
    let slides = document.querySelectorAll('.inner_1_main_lf_icon');
    let slicks = document.querySelectorAll('.inner_1_main_lf_iconi');

    $('.slick-arrow.slick-prev').on('click', function() {
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('slick-current')) {
                for (let k of slicks) {
                    if (k.classList.contains('slick-current')) {
                        k.classList.remove('slick-current');
                    }
                }
                slicks[i-1].classList.add('slick-current');
            }           
        }
    });

    $('.slick-arrow.slick-next').on('click', function() {
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains('slick-current')) {
                for (let k of slicks) {
                    if (k.classList.contains('slick-current')) {
                        k.classList.remove('slick-current');
                    }
                }
                slicks[i-1].classList.add('slick-current');
            }           
        }
    });

    let dots = document.querySelectorAll('.slick-dots li');
    for (let index = 0; index < dots.length; index++) {
        dots[index].addEventListener('click', function() {
            if (dots[index].classList.contains('slick-active')) {
                for (let k of slicks) {
                    if (k.classList.contains('slick-current')) {
                        k.classList.remove('slick-current');
                    }
                }
                slicks[index].classList.add('slick-current');
            }
        });
    }
});
