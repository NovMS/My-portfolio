window.onscroll = function() {
    var mainAbout = document.querySelector('.main-blocks');
    var topMainAbout = mainAbout.getBoundingClientRect().top + window.pageYOffset;
    var botMainAbout = mainAbout.getBoundingClientRect().bottom + window.pageYOffset;
    var mainAboutLeft = document.querySelector('.main-blocks__left');
    var mainAboutRight = document.querySelector('.main-blocks__right');
    var scrolled = window.pageYOffset;

    if (scrolled > topMainAbout) {
        mainAbout.classList.add('main-blocks_fixed');
        mainAboutLeft.classList.add('main-blocks__left_fixed');
        mainAboutRight.classList.add('main-blocks__right_fixed');
    }
    if (scrolled < topMainAbout) {
        mainAbout.classList.remove('main-blocks_fixed');
        mainAboutLeft.classList.remove('main-blocks__left_fixed');
        mainAboutRight.classList.remove('main-blocks__right_fixed');
    }
    if (scrolled + document.documentElement.clientHeight > botMainAbout) {
        mainAboutLeft.classList.remove('main-blocks__left_fixed');
        mainAboutRight.classList.remove('main-blocks__right_fixed');

    }
}