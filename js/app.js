/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBar = document.getElementById('navbar__list');
//console.log(navBar);
function buildNavBar() {
    const sections = document.querySelectorAll('section');
    //console.log(sections);
    for (section of sections) {
        const idOfSection = section.id;
        const dataNavOfSection = section.dataset.nav;
      
        //console.log(section);
        const newListItem = document.createElement('li');
        newListItem.innerHTML = `<a class="menu__link" href="#${idOfSection}">${dataNavOfSection}</a>`
        navBar.appendChild(newListItem);
    }
}

buildNavBar();

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', setActiveClass);

function setActiveClass(event){
    console.dir(event);
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
}

/* let sections = document.querySelectorAll('section')
function getActiveClass(sections) {
    
    console.log(Math.floor(sections.getBoundingClientRect().top));
}; */
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


