$(document).ready(function () {
    $('.call, .sendcall').on('click', function() {
        $('.request_modal').fadeIn();
        $('body').addClass('lock');
    });
    $('#request_modal_close').on('click', function() {
        $('.request_modal').fadeOut();
        $('body').removeClass('lock');
    });
    $('.request_modal').on('click', function(e) {
        if ($(e.target).closest('.request_content').length == 0) {
            $(this).fadeOut();
            $('body').removeClass('lock');
        }
    });
});


$(document).ready(function () {
    var element = document.getElementById('request_tel_input');
    var maskOptions = {
      mask: '+{7} (000)-000-0000'
    };
    var mask = IMask(element, maskOptions);
});



