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
        const liElem = document.createElement('li');
        //const divElem = document.createElement("div");
        const Id = sections[s].id;
        const DataNav = sections[s].dataset.nav;
        liElem.innerHTML = `<a class="menu__link" href="#${Id}">${DataNav}</a>`;
        Menu.appendChild(liElem);
    }
}
NavBuilder();


//when scroll add your-active class to section and class active to navigation bar elements
window.addEventListener('scroll', () => {
    sections.forEach(s => {
        const topDistance = s.getBoundingClientRect().top;
        // if the distance to the top is between 0-150px
        if (topDistance >= 0 && topDistance < 150) {
            s.classList.add('your-active-class');
            // add class active to navugation in order to highlight the navigation when scrolling
            document.querySelector(`a[href="#${s.id}"]`).classList.add("active");

            // otherwise, remove the class
        } else {
            s.classList.remove('your-active-class');
            document.querySelector(`a[href="#${s.id}"]`).classList.remove("active");


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


const navBar = document.querySelector(".page__header");
const navToggle = document.querySelector(".nav-toggle");

const collapseNavBar = (navToggle) => {
    navToggle.addEventListener("click", () => {
      navBar.classList.toggle("nav-open");
      document.querySelector(".navbar__menu").classList.toggle("toggled");
    });
  };
  collapseNavBar(navToggle); 

/**
 * End Main Functions
*/