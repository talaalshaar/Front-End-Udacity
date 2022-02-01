/**
 * Define Global Variables
 * 
*/
const Menu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

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
NavBuilder = () => {
    //to loop from section 1 to 4 and add sections to navigation 
    for (s = 0; s <= sections.length; s++) {
        //const el = document.querySelector('data-nav');
        const liElem = document.createElement('li');
        const Id = sections[s].id;
        const DataNav = sections[s].dataset.nav;
        liElem.innerHTML = `<li><a class="menu__link" href="#${Id}">${DataNav}</a></li>`;
        Menu.appendChild(liElem);

    }
}

window.addEventListener('scroll', (e) => {
    sections.forEach(s => {
        const topDistance = s.getBoundingClientRect().top;
        // if the distance to the top is between 0-150px
        if (topDistance >= 0 && topDistance < 150) {
            s.classList.add('your-active-class');
            // otherwise, remove the class
        } else {
            s.classList.remove('your-active-class');
        }
    });


});

NavBuilder();

// Add class 'active' to section when near top of viewport

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


