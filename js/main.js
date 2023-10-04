// selecting the element
let nav = document.querySelector('.nav');

let open_nav_buttons = document.querySelectorAll('.menu-button');
let close_button = document.querySelector('.close-ico');
let wrapper = document.querySelector('.wrapper');
let header = document.querySelector('.header');

for (var i = 0; i < open_nav_buttons.length; i++) {
    open_nav_buttons[i].addEventListener('click', function() {
        $(".overlay").fadeToggle(600);
        wrapper.classList.toggle('closed');
        nav.classList.toggle('closed');
    });
};

close_button.addEventListener('click', function() {
    $(".overlay").fadeToggle(600);
        wrapper.classList.toggle('closed');
        nav.classList.toggle('closed');
});

