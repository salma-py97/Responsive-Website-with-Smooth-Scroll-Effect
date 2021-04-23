const mobileMenu = document.querySelector('#mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

// Display mobile menu
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle('active');
})

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    const signUpMenu = document.querySelector('#signUp');

    let scrollPosition = window.scrollY;
    console.log(scrollPosition);

    // add highlight class to menu items
    if (window.innerWidth > 960 && scrollPosition < 400){
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        servicesMenu.classList.remove("highlight");
        return
    } else if (window.innerWidth > 960 && scrollPosition < 1128){
        aboutMenu.classList.add("highlight");
        homeMenu.classList.remove("highlight");
        servicesMenu.classList.remove("highlight");
        return
    } else if (window.innerWidth > 960 && scrollPosition < 1900){
        servicesMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        homeMenu.classList.remove("highlight");
        signUpMenu.classList.remove("highlight");
        return
    }
    if (elem && window.innerWidth < 960 && scrollPosition < 600 || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// close mobile menu and clicking on menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth < 768 && menuBars){
        menuBars.classList.toggle('is-active');
        navbarMenu.classList.remove('active');
    }
}

navbarMenu.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

