/**
 * Define Global Variables
*/
const Menu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
*/

// build the nav
NavBuilder = () => {
    //to loop from section 1 to 4 and add sections to navigation 
    for (s = 0; s < sections.length; s++) {
        //const el = document.querySelector('data-nav');
        const liElem = document.createElement('li');
        const Id = sections[s].id;
        const DataNav = sections[s].dataset.nav;
        liElem.innerHTML = `<li><a class="menu__link" href="#${Id}">${DataNav}</a></li>`;
        Menu.appendChild(liElem);

    }
}
NavBuilder();

window.addEventListener('scroll', () => {
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

//set style to highlight active navigation bar elements
const menuLink = document.querySelectorAll(".menu__link");
addStyle = () => {
    menuLink.forEach((anchor) => {
        anchor.addEventListener("click", function () {
            menuLink.forEach((anchor) => {
                anchor.classList.remove("active");
            });
            anchor.classList.add("active");
        });
    });
}
addStyle();

// scrolling = () => {
//     menuLink.forEach((anchor) => {
//         menuLink.forEach((anchor) => {
//             anchor.classList.remove("active");
//         });
//         anchor.classList.add("active");
//     });
// }


// window.onscroll = function () {
//     scrolling();
// };


scrollFunction = () => {
    const menuLink = document.querySelectorAll(".menu__link");
    menuLink.forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
};
scrollFunction();

/**
 * End Main Functions
*/