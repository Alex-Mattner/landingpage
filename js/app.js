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

// Add and remove class 'active' to section and mark section on scroll 
window.addEventListener('scroll', setActiveClass);

function setActiveClass(event){
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section')

        function deleteClassAndStyle() {
           sections.forEach(section => {
            section.classList.remove('your-active-class');
            section.style.border = 'none';
            });
        } 
   
   deleteClassAndStyle();

        if (scrollPosition > 600 && scrollPosition < 1300) {
            sections[0].classList.add('your-active-class');
            sections[0].style.border ="3px solid yellow";

        } else if (scrollPosition > 1300 && scrollPosition < 2000) {
            sections[1].classList.add('your-active-class');
            sections[1].style.border ="3px solid green";

         }else if (scrollPosition > 2000 && scrollPosition < 2700) {
            sections[2].classList.add('your-active-class');
            sections[2].style.border ="3px solid red";

        } else if (scrollPosition > 2700 ) {
            sections[3].classList.add('your-active-class');
            sections[3].style.border ="3px solid black";
        }
}

    
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


