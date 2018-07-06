var works = document.querySelector('.works');
var worksRight = document.querySelector('.works__right');
var scrollWidth = window.innerWidth - document.documentElement.clientWidth;
var allProjects = document.querySelector('.works__all-projects');
var shadow = document.querySelectorAll('.works__shadow');

var bb = document.querySelector('.works__bb');
var descBB = document.querySelector('.works__description-bb');
var cat = document.querySelector('.works__cat');
var descCat = document.querySelector('.works__description-cat');

bb.addEventListener('click', function () {
    openDescription(bb, descBB);
});

cat.addEventListener('click', function () {
    openDescription(cat, descCat);
});

for (var i = 0; i < shadow.length; i++) {
    shadow[i].addEventListener('click', function() {
        closeDescription (bb, descBB);
        closeDescription (cat, descCat);
    });
}

function openDescription (nameProject, descProjects) {

    works.scrollIntoView(false);
    Scrolled();
    worksRight.style.paddingRight = scrollWidth + 'px';
    allProjects.style.transitionDelay = '0s';
    nameProject.style.transitionDelay = '0.3s';
    allProjects.style.transform = 'rotateX(55deg) rotateZ(0deg) rotateY(0deg)';
    nameProject.style.transform = 'rotateX(-55deg)';
    document.documentElement.style.overflow = 'hidden';
    descProjects.classList.add('works__description_open');
}

function closeDescription (nameProject, descProject) {
    console.log('close');
    works.scrollIntoView(false);
    nameProject.style.transitionDelay = '0.3s';
    allProjects.style.transitionDelay = '0.3s';
    nameProject.style.transform = '';
    allProjects.style.transform = '';
    document.documentElement.style.overflow = 'auto';
    descProject.classList.remove('works__description_open');
    worksRight.style.paddingRight = '';
    nameProject.style.transitionDelay = '0s';
}
