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

//Define Global Variables
let sectionsGlobal = document.querySelectorAll('section');


// build the nav
const navBar = document.getElementById('navbar__list');

function buildNavBar() {
    const sections = document.querySelectorAll('section');
    
    for (section of sections) {
       
        const idOfSection = section.id;
        const dataNavOfSection = section.dataset.nav;

        const newListItem = document.createElement('li');
        newListItem.innerHTML = `<a class="menu__link" href="#${idOfSection}">${dataNavOfSection}</a>`
        navBar.appendChild(newListItem);
    }
}

buildNavBar();


// Add and remove class="active" to navbar list items and highlight li item shown in viewport 
const navItems = document.querySelectorAll('li');
window.addEventListener('scroll', setActiveClass);

//implementing the functionality using getBoundingClientRect()
window.addEventListener('scroll', sectionViewd);
function sectionViewd() {
    const section1 = document.getElementById('section1');
    const yOffsetSection1 =section1.getBoundingClientRect();
    
    const section2 = document.getElementById('section2');
    const yOffsetSection2 =section2.getBoundingClientRect();
    
    const section3 = document.getElementById('section3');
    const yOffsetSection3 =section3.getBoundingClientRect();
    
    const section4 = document.getElementById('section4');
    const yOffsetSection4 =section4.getBoundingClientRect();
    
    const li1 = document.querySelectorAll('li')[0];
    const li2 = document.querySelectorAll('li')[1];
    const li3 = document.querySelectorAll('li')[2];
    const li4 = document.querySelectorAll('li')[3];

    //remove class 'active'    
    function deleteClassActive() {
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
    } 

    deleteClassActive();

    // set list item in navbar class="active"
    if(yOffsetSection1.top < 0) {
        deleteClassActive();
        li1.classList.add('active');
    } if(yOffsetSection2.top < 0) {
        deleteClassActive();
        li2.classList.add('active')
    } if(yOffsetSection3.top < 0) {
        deleteClassActive();
        li3.classList.add('active')
    } if(yOffsetSection4.top < 0) {
        deleteClassActive();
        li4.classList.add('active')
    }
   
}


// set and delete class="your-active-class" at different sections in viewport
function setActiveClass(event){
    const sections = document.querySelectorAll('section')

        function deleteClassAndStyle() {
           sections.forEach(section => {
            section.classList.remove('your-active-class');
            section.style.border = 'none';
            });
        } 
   
        const positionSection1 = sections[0].getBoundingClientRect();
        const positionSection2 = sections[1].getBoundingClientRect();
        const positionSection3 = sections[2].getBoundingClientRect();
        const positionSection4 = sections[3].getBoundingClientRect();
        
        if (positionSection1.top < 0) {
            deleteClassAndStyle();
            sections[0].classList.add('your-active-class');
            sections[0].style.border ="3px solid yellow";
        } if (positionSection2.top < 0) {
            deleteClassAndStyle();
            sections[1].classList.add('your-active-class');
            sections[1].style.border ="3px solid yellow";
        } if (positionSection3.top < 0) {
            deleteClassAndStyle();
            sections[2].classList.add('your-active-class');
            sections[2].style.border ="3px solid yellow";
        } if (positionSection4.top < 0) {
            deleteClassAndStyle();
            sections[3].classList.add('your-active-class');
            sections[3].style.border ="3px solid yellow";
        } 

}

 
// Scroll to anchor ID using scrollTO event
    /*****************************
     
    IMPLEMENTED VIA CSS SCROLL BEHAVIOUR
    
    *****************************/


