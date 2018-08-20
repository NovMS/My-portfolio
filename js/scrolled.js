window.onscroll = Scrolled;
var clientWidth = window.screen.width;
var browWidth = window.innerWidth;

function Scrolled() {
    if (clientWidth >= 1024 && browWidth >= 1024) {
        var about = document.querySelector('.about');
        var topAbout = about.getBoundingClientRect().top + window.pageYOffset;
        var botAbout = about.getBoundingClientRect().bottom + window.pageYOffset;
        var aboutLeft = document.querySelector('.about__left');
        var aboutRight = document.querySelector('.about__right');
        var scrolled = window.pageYOffset;

        var downArrow = document.querySelector('.main-header__down-arrow');
        var linkDownArrow = document.querySelector('.link-down-arrow');

        if (scrolled > 5) {
            downArrow.style.left = '60px';
            downArrow.style.bottom = '30px';
            downArrow.style.transform = 'rotate(180deg)';
            linkDownArrow.href = '#zero-block';
        }
        else {
            downArrow.style.left = '';
            downArrow.style.bottom = '';
            downArrow.style.transform = '';
            linkDownArrow.href = '#first-block';
        }

        if (scrolled > topAbout) {
            about.classList.add('about_fixed');
            aboutLeft.classList.add('about__left_fixed');
            aboutRight.classList.add('about__right_fixed');
        }
        if (scrolled < topAbout) {
            about.classList.remove('about_fixed');
            aboutLeft.classList.remove('about__left_fixed');
            aboutRight.classList.remove('about__right_fixed');
        }
        if (scrolled + document.documentElement.clientHeight > botAbout) {
            aboutLeft.classList.remove('about__left_fixed');
            aboutRight.classList.remove('about__right_fixed');

        }

        var works = document.querySelector('.works');
        var topWorks = works.getBoundingClientRect().top + window.pageYOffset;
        var botWorks = topWorks + (works.offsetHeight / 2);
        var worksContent = document.querySelector('.works__content')
        var worksLeft = document.querySelector('.works__left');
        var worksRight = document.querySelector('.works__right');

        if ((scrolled > topWorks) && (scrolled < botWorks)) {
            worksContent.classList.add('works__content_fixed');
            var x = (100 * (scrolled - topWorks)) / (works.offsetHeight / 2);
            worksLeft.style.transform = 'translateX(' + (-x) + '%)';
            worksRight.style.transform = 'translateX(' + (100 - x) + '%';
            worksRight.style.top = '-100vh';

        }
        if (scrolled <= topWorks) {
            worksContent.classList.remove('works__content_fixed');
            worksLeft.style.transform = 'translateX(0%)';
            worksRight.style.transform = 'translateX(100%)';
            worksRight.style.top = '0';
        }
        if (scrolled >= botWorks) {
            worksContent.classList.remove('works__content_fixed');
            worksLeft.style.transform = 'translateX(0%)';
            worksRight.style.transform = 'translateX(0%)';
            worksRight.style.top = '0';
        }
    }
}