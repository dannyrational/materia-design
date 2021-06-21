const openMenuBtn = document.querySelector('.mobile-menu-btn-open')
const closeMenuBtn = document.querySelector('.mobile-menu-btn-close')
const mobileMenu = document.querySelector('.mobile-menu')

openMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('translate-x-full')
})

closeMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.add('translate-x-full')
})