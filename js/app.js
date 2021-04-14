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
let sectionsGlobal = document.querySelectorAll('section');
const sections2 = document.querySelectorAll('section');
//const idOfSectionTest;
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
//let elem = document.getElementById('section1');

window.addEventListener('scroll', checkSectionInViewPort);

function checkSectionInViewPort () {
    let elem = document.getElementById('section1');
    console.log(elem);
    let rect = elem.getBoundingClientRect();
    
    return (rect.top >=0);
}

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
const navItems= document.getElementsByClassName('menu__link');
//console.log(navItems);
/* const links = document.querySelectorAll('.navbar__menu a');
console.log(links);*/

/* for (const navItem of navItems) {
    navItem.addEventListener('click', scrollToView(event));
    
} */
//console.log(sectionsGlobal);
/* function scrollToView (event) {
    //event.preventDefault();
    if (sections2.id = 'section1') {
        console.log(sections2.id);

    } else if (sections2.id = 'section2') {
        console.log('section2')
    } else {
        console.log('test');
    }
   */  //console.log(sectionsGlobal);
    /* for (let i = 0; i < sectionsGlobal; i++) {
        //sectionsGlobal[i].scroll(100,100);
        console.log('hello')
        //addEventListener('scroll', sectionScroll(navItem));
    } */
    
    
    /* navItem.addEventListener('click', () => {
        for(i = 0; i < navItems ; i++) {
            navItems[i].addEventListener('scroll', sectionScroll(navItem));
        }
    })    */
//}

/* 
function scrolltoSection(event) {
    console.log('hello');
} */


// Set sections as active


/*Playground -Test section: adding additional content by clicking the button on the bottom*/

let getButtonData = document.querySelector('button');
getButtonData.addEventListener('click', function (e) {
       
    let getMain = document.querySelector('main');
    let elementCountInsideOfMain = getMain.childElementCount; 
   
    let addSection = document.querySelector('#section1');
    let clone = addSection.cloneNode(true);
    clone.id = 'section' + [elementCountInsideOfMain];
    clone.dataset.nav = 'Section ' + [elementCountInsideOfMain];
    getMain.appendChild(clone);
    
    // building the nav ULIST
    for (let i = 0; i < section.length; i++) {
         
        let newListItem = document.createElement('li');
        //newListItem.style.color = 'green';
        newListItem.innerHTML = `<a href="#section${i}">Section${i}</a>`;
        navbarList.appendChild(newListItem);
    }
})