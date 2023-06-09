const tabs = document.querySelectorAll('[data-target]');
let tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove("skills__active")
        })

        target.classList.add("skills__active")

        tabs.forEach(tab => {
            tab.classList.remove("skills__active")
        })

        tab.classList.add('skills__active')
    })
});

/****************** MIXITUP FILTER PORTFOLIO *************************/

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/************************* Link Active Work ***************************/

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(i => i.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(i => i.addEventListener("click", activeWork))

/************************* STEPS ***************************/
const stepsContentList = document.querySelectorAll('.steps__content');
const stepsDescriptionList = document.querySelectorAll('.steps__description');

// Fonction de rappel pour fermer "steps__description"
const closeStepsDescription = () => {
    stepsContentList.forEach((stepsContent) => {
        stepsContent.classList.remove('active');
        stepsContent.querySelector('.steps__button').style.display = 'block';
    });
    stepsDescriptionList.forEach((stepsDescription) => {
        stepsDescription.classList.remove('active');
    });
};


// Écouteurs d'événements sur chaque "steps__content" pour les ouvrir/fermer individuellement
stepsContentList.forEach((stepsContent, index) => {
    const buttonElement = stepsContent.querySelector('.steps__button');
    const numberElement = stepsContent.querySelector('.number');

    stepsContent.addEventListener('click', () => {
        stepsContent.classList.toggle('active');
        stepsDescriptionList[index].classList.toggle('active');
        numberElement.classList.toggle('number-active');

        if (stepsContent.classList.contains('active')) {
            buttonElement.style.display = 'none';
        } else {
            buttonElement.style.display = 'block';
        }
    });
});


/************************* SERVICES MODAL ***************************/
const modalViews = document.querySelectorAll('.services__modal'),
    servicesContents = document.querySelectorAll('.services__content'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

servicesContents.forEach((servicesContent, i) => {
    servicesContent.addEventListener('click', () => {
        modal(i);
        servicesContent.classList.add('modal-open');
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", (event) => {
        event.stopPropagation(); // Empêche la propagation de l'événement de clic à la fenêtre modale
        const modal = modalClose.closest('.services__modal');
        modal.classList.remove('active-modal');
    });
});


/************************* INPUT ANIMATION ***************************/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus")
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/************************* SCROLL SECTIONS ACTIVE LINK ***************************/

//Toutes les sections ont un id défini
const sections = document.querySelectorAll("section[id]");

// Ajoute un ecouteur d'évenement pour le scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    // get current scroll position
    let scrollY = window.pageYOffset;
    //Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");
        /* - If our current scroll posistion enters the space where current section on screen is, add .active class to
        corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through
        sections as an selector */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}

/************************* SHOW SIDE BAR ***************************/

const navMenu = document.getElementById("sidebar"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close"),
    navLink = document.getElementsByClassName("nav__link")

/* SIDEBAR SHOW*/
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}
/* SIDEBAR HIDDEN*/
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/* CLOSE SIDEBAR */
for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/************************* ANIMATION SCROLL ***************************/

window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.slide-up');

    elements.forEach(function (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - windowHeight / 4) {
            element.classList.add('slide-up-visible');
        } else {
            element.classList.remove('slide-up-visible');
        }
    });
});





