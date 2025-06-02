let button = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    menu.classList.toggle('active');
});