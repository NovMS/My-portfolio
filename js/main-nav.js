var sandwich = document.querySelector('.main-nav__sandwich');
var mainNav = document.querySelector('.main-nav')
sandwich.addEventListener('click', function () {
        mainNav.classList.toggle('main-nav_visible');
        sandwich.classList.toggle('main-nav__sandwich_visible');
})