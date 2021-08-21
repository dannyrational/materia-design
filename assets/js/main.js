//Slide Mobile Menu
const mobileMenuOpenBtn = document.querySelector('#mobileMenuOpenBtn');
const mobileMenuCloseBtn = document.querySelector('#mobileMenuCloseBtn');
const slideOutMenu = document.querySelector('#slideOutMenu');
const slideOutMenuOverlay = document.querySelector('#slideOutMenuOverlay')

function slideMenuOut() {
    slideOutMenu.classList.remove('translate-x-full');

    // Show slideOutMenuOverlay
    slideOutMenuOverlay.classList.remove('hidden')
}

function slideMenuIn() {
    slideOutMenu.classList.add('translate-x-full');

    // Hide slideOutMenuOverlay
    slideOutMenuOverlay.classList.add('hidden')
}

for (let i = 1; i < 20; i += 2) {
    console.log(i)

};