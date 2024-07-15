const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelector('.backdrop');

//make fullscreen nav menu appear
toggle.addEventListener('click', () => nav.classList.add('open-nav'));
backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));
//close nav menu
function closeNav() {
    nav.classList.remove('open-nav');
}