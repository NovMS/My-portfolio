window.onscroll = function() {
    var aboutAbout = document.querySelector('.about');
    var topaboutAbout = aboutAbout.getBoundingClientRect().top + window.pageYOffset;
    var botaboutAbout = aboutAbout.getBoundingClientRect().bottom + window.pageYOffset;
    var aboutAboutLeft = document.querySelector('.about__left');
    var aboutAboutRight = document.querySelector('.about__right');
    var scrolled = window.pageYOffset;

    if (scrolled > topaboutAbout) {
        aboutAbout.classList.add('about_fixed');
        aboutAboutLeft.classList.add('about__left_fixed');
        aboutAboutRight.classList.add('about__right_fixed');
    }
    if (scrolled < topaboutAbout) {
        aboutAbout.classList.remove('about_fixed');
        aboutAboutLeft.classList.remove('about__left_fixed');
        aboutAboutRight.classList.remove('about__right_fixed');
    }
    if (scrolled + document.documentElement.clientHeight > botaboutAbout) {
        aboutAboutLeft.classList.remove('about__left_fixed');
        aboutAboutRight.classList.remove('about__right_fixed');

    }
}