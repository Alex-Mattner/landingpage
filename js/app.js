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
//console.log(navBar);
function buildNavBar() {
    const sections = document.querySelectorAll('section');
    //console.log(sections);
    for (section of sections) {
        //const active = 'active'
        const idOfSection = section.id;
        const dataNavOfSection = section.dataset.nav;

        //console.log(section);
        const newListItem = document.createElement('li');
        newListItem.innerHTML = `<a class="menu__link" href="#${idOfSection}">${dataNavOfSection}</a>`
        navBar.appendChild(newListItem);
    }
    const firstListItem = document.querySelector('li');
    firstListItem.classList.add('active');
}

buildNavBar();


// Add and remove class 'active' to section and mark section on scroll 
const navItems = document.querySelectorAll('li');
window.addEventListener('scroll', setActiveClass);
window.addEventListener('scroll', checkSectionInViewPort);

function checkSectionInViewPort () {
    const li1 = document.querySelectorAll('li')[0];
    const li2 = document.querySelectorAll('li')[1];
    const li3 = document.querySelectorAll('li')[2];
    const li4 = document.querySelectorAll('li')[3];
       
    let activeSection = '';
    //console.log(pageYOffset);
    sectionsGlobal.forEach( sectionGlobal => {
        const sectionTop = sectionGlobal.offsetTop;
        //console.log(sectionTop);
        
        if(pageYOffset >= sectionTop) {
            activeSection = sectionGlobal.getAttribute('id');
        }
    })
       
    //remove class 'active'    
    function deleteClassActive() {
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
    } 

    deleteClassActive();

    // setting active class
    if(activeSection === 'section1') {
        li1.classList.add('active');
    } else if (activeSection === 'section2') {
        li2.classList.add('active');
    } else if (activeSection === 'section3') {
        li3.classList.add('active');
    } else if (activeSection === 'section3'){
        li4.classList.add('active');
    } else if (activeSection === 'section4'){
        li4.classList.add('active');
    }  
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
    /*****************************
     
    IMPLEMENTED VIA CSS SCROLL BEHAVIOUR
    
    *****************************/



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