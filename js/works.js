var works = document.querySelector('.works');
var worksRight = document.querySelector('.works__right');
var bb = document.querySelector('.works__bb');
var descBB = document.querySelector('.works__description-bb');
var scrollWidth = window.innerWidth - document.documentElement.clientWidth;
var allProjects = document.querySelector('.works__all-projects');

bb.addEventListener('click', function () {
    works.scrollIntoView(false);
    Scrolled();
    worksRight.style.paddingRight = scrollWidth + 'px';
    allProjects.style.transitionDelay = '0s';
    bb.style.transitionDelay = '0.3s';
    allProjects.style.transform = 'rotateX(55deg) rotateZ(0deg) rotateY(0deg)';
    bb.style.transform = 'rotateX(-55deg)';
    document.documentElement.style.overflow = 'hidden';
    descBB.classList.add('works__description_open');
})

descBB.addEventListener('click', function () {
    works.scrollIntoView(false);
    bb.style.transitionDelay = '0.3s';
    allProjects.style.transitionDelay = '0.3s';
    bb.style.transform = '';
    allProjects.style.transform = '';
    document.documentElement.style.overflow = 'auto';
    descBB.classList.remove('works__description_open');
    worksRight.style.paddingRight = '';
    bb.style.transitionDelay = '0s';
})