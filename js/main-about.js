window.onscroll = function() {
    var mainAbout = document.querySelector('.main-about');
    var topMainAbout = mainAbout.getBoundingClientRect().top + window.pageYOffset;
    var botMainAbout = mainAbout.getBoundingClientRect().bottom + window.pageYOffset;
    var mainAboutLeft = document.querySelector('.main-about__left');
    var mainAboutRight = document.querySelector('.main-about__right');
    var scrolled = window.pageYOffset;
    if (scrolled > topMainAbout) {
        mainAbout.classList.add('main-about_fixed');
        mainAboutLeft.classList.add('main-about__left_fixed');
        mainAboutRight.classList.add('main-about__right_fixed');
    }
    if (scrolled < topMainAbout) {
        mainAbout.classList.remove('main-about_fixed');
        mainAboutLeft.classList.remove('main-about__left_fixed');
        mainAboutRight.classList.remove('main-about__right_fixed');
    }
    if (scrolled + document.documentElement.clientHeight > botMainAbout) {
        mainAboutLeft.classList.remove('main-about__left_fixed');
        mainAboutRight.classList.remove('main-about__right_fixed');

    }
}