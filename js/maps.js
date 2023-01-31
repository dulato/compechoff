let tools = document.querySelectorAll('.map_direction_link');
let countries = document.querySelectorAll('.country');

for (let i = 0; i < countries.length; i++) {
    countries[i].addEventListener('mouseenter', function() {
        tools[i].classList.add('selected');
    });    

    countries[i].addEventListener('mouseleave', function() {
        tools[i].classList.remove('selected');
    });    
}

for (let j = 0; j < tools.length; j++) {
    tools[j].addEventListener('mouseenter', function() {
        countries[j].classList.add('selected');
    });    

    tools[j].addEventListener('mouseleave', function() {
        countries[j].classList.remove('selected');
    });    
}

