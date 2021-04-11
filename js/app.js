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

// Add class 'active' to section 
window.addEventListener('scroll', setActiveClass);

function setActiveClass(event){
    //console.dir(event);
    const scrollPosition = window.scrollY;
    let lastScroll = 0;
    //console.log(scrollPosition);
    const sections = document.querySelectorAll('section')

    //let scrollPosition2 = window.scrollY;
   /*  if (scrollPosition2 > lastScroll) {
        console.log('downscroll');
    } else if (scrollPosition2 < lastScroll) {
        console.log('upscroll');
    }
 */
    
    /* function deleteClassAndStyle(sections) {
        sections.forEach(section => {
            section.classList.remove('your-active-class');
            section.style.border = 'none';
        });
 */
        function deleteClassAndStyle() {
           
           sections.forEach(section => {
            section.classList.remove('your-active-class');
            section.style.border = 'none';
        });

            /* for (let i=0; i <= 4; i++) {
                sections[i].classList.remove('your-active-class');
                sections[i].style.border = 'none';
            } */
            console.log(sections);
        } 
   
   deleteClassAndStyle();
   
       /*  if (scrollPosition2 > lastScroll) {
        console.log('downscroll');
         */

        if (scrollPosition > 600 && scrollPosition < 1300) {
            //deleteClassAndStyle();
            sections[0].classList.add('your-active-class');
            sections[0].style.border ="3px solid yellow";

        } else if (scrollPosition > 1300 && scrollPosition < 2000) {
            //deleteClassAndStyle();
            sections[1].classList.add('your-active-class');
            //sections[0].classList.remove('your-active-class');
            sections[1].style.border ="3px solid green";
            //sections[0].style.border = '0px none';

         }else if (scrollPosition > 2000 && scrollPosition < 2700) {
            //deleteClassAndStyle();
            sections[2].classList.add('your-active-class');
            //sections[1].classList.remove('your-active-class');
            sections[2].style.border ="3px solid red";
            //sections[1].style.border = '0px none';

        } else if (scrollPosition > 2700 ) {
            //deleteClassAndStyle();
            sections[3].classList.add('your-active-class');
            //sections[2].classList.remove('your-active-class');
            sections[3].style.border ="3px solid black";
            //sections[2].style.border = '0px none';
        }
    /* } else {
        console.log('upscroll');
        } */
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


