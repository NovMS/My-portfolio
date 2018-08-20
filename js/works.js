if (clientWidth >= 1024) {

    var works = document.querySelector('.works');
    var worksRight = document.querySelector('.works__right');
    var scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    var allProjects = document.querySelector('.works__all-projects');
    var shadow = document.querySelectorAll('.works__shadow');

    var bb = document.querySelector('.works__bb');
    var descBB = document.querySelector('.works__description-bb');

    var cat = document.querySelector('.works__cat');
    var descCat = document.querySelector('.works__description-cat');

    var academy = document.querySelector('.works__academy');
    var descAcademy = document.querySelector('.works__description-academy');

    var sport = document.querySelector('.works__sport');
    var descSport = document.querySelector('.works__description-sport');

    var websocket = document.querySelector('.works__websocket');
    var descWebsocket = document.querySelector('.works__description-websocket');

    var search = document.querySelector('.works__search');
    var descSearch = document.querySelector('.works__description-search');

    var downArrow = document.querySelector('.main-header__down-arrow');

    bb.addEventListener('click', function () {
        openDescription(bb, descBB);
    });

    cat.addEventListener('click', function () {
        openDescription(cat, descCat);
    });

    academy.addEventListener('click', function () {
        openDescription(academy, descAcademy);
    });

    sport.addEventListener('click', function () {
        openDescription(sport, descSport);
    });

    websocket.addEventListener('click', function () {
        openDescription(websocket, descWebsocket);
    });

    search.addEventListener('click', function () {
        openDescription(search, descSearch);
    });

    for (var i = 0; i < shadow.length; i++) {
        shadow[i].addEventListener('click', function () {
            closeDescription(bb, descBB);
            closeDescription(cat, descCat);
            closeDescription(academy, descAcademy);
            closeDescription(sport, descSport);
            closeDescription(websocket, descWebsocket);
            closeDescription(search, descSearch);
        });
    }

    function openDescription(nameProject, descProjects) {

        works.scrollIntoView(false);
        Scrolled();
        worksRight.style.paddingRight = scrollWidth + 'px';
        allProjects.style.transitionDelay = '0s';
        nameProject.style.transitionDelay = '0.3s';
        allProjects.style.transform = 'rotateX(55deg) rotateZ(0deg) rotateY(0deg)';
        nameProject.style.transform = 'rotateX(-55deg)';
        document.documentElement.style.overflow = 'hidden';
        descProjects.classList.add('works__description_open');
        downArrow.style.display = 'none';
    }

    function closeDescription(nameProject, descProject) {
        works.scrollIntoView(false);
        nameProject.style.transitionDelay = '0.3s';
        allProjects.style.transitionDelay = '0.3s';
        nameProject.style.transform = '';
        allProjects.style.transform = '';
        document.documentElement.style.overflow = 'auto';
        descProject.classList.remove('works__description_open');
        worksRight.style.paddingRight = '';
        nameProject.style.transitionDelay = '0s';
        downArrow.style.display = 'block';
    }
}