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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
let numberOfListItems  = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListItem(){
    for(section of sections){
        sectionName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute('id');

        //create item from each one
        listItem = document.createElement('li');

        //add items text
        listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName}</a>`;

        //add listitem to menu
        menu.appendChild(listItem);
    }
}

//determine if section in viewport
function sectionInViewPort(elem){
    let sectionPos = elem.getBoundingClientRect();
    return (sectionPos.top >= 0);
}

//gives section beung viewed a different appearance
function toggleActiveClass(){
    for(section of sections){
        if (sectionInViewPort(section)){
            //if it doesnt contains you active class
            if(!section.classList.contains('your-active-class')){
                //add it
                section.classList.add('your-active-class');
            }
            else { // if it oustide viewport remove it
                section.classList.remove('your-active-class');
            }
        }
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

createListItem();

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll',toggleActiveClass);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
