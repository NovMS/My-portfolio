var works = document.querySelector('.works');
var worksRight = document.querySelector('.works__right');
var bb = document.querySelector('.works__bb');
var scrollWidth = window.innerWidth - document.documentElement.clientWidth;
var allProjects = document.querySelector('.works__all-projects');

bb.addEventListener('click', function () {
    var descBB = document.querySelector('.works__description-bb');
    works.scrollIntoView(false);
    allProjects.style.transform = 'rotate(0)';
    Scrolled();
    worksRight.style.paddingRight = scrollWidth + 'px';
    document.documentElement.style.overflow = 'hidden';
    descBB.classList.add('works__description_open');
})