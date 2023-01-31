let element = document.getElementById('contact_section_form_input_tel');
element.addEventListener('input', correctNum);
function correctNum() {
    let maskOptions = {
        mask: '+{7} (000) 000-00-00'
    };
    let mask = IMask(element, maskOptions);
}


let forma = document.forms['contact_section_form'];
forma.addEventListener('submit', sender);
function sender(event) {
    event.preventDefault();
    if (element.value.length < 18) {
        element.classList.add('wrong');
    }
    else {
        element.classList.remove('wrong');
        forma.submit();
    }
}



