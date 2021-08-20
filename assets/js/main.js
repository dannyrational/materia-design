//Slide Mobile Menu
const mobileMenuOpenBtn = document.querySelector('#mobileMenuOpenBtn');
const mobileMenuCloseBtn = document.querySelector('#mobileMenuCloseBtn');
const slideOutMenu = document.querySelector('#slideOutMenu');

function slideMenuOut() {
    slideOutMenu.classList.remove('translate-x-full');
}

function slideMenuIn() {
    slideOutMenu.classList.add('translate-x-full');
}