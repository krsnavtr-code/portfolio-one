// This is for navbar bootom
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    burger.addEventListener("click", () => {
      // Toogle nav
      nav.classList.toggle("nav-active");
      // Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ``;
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
      // Burger animate
      burger.classList.toggle('toggle');
    });
  };
  navSlide();

  // Contact display coustomize
const mediaQuery = window.matchMedia('(max-width: 769px)')
if (mediaQuery.matches) {
  document.querySelector('.hidden-email').style.display = "none";
  document.querySelector('.hidden-email-icon').style.display = "none";
  document.querySelector('.hidden-phone').style.display = "none";
  document.querySelector('.hidden-phone-icon').style.display = "none";
  document.querySelector('.contact-small').style.display = "block";
  document.querySelector('nav').style.minHeight = '5vh';
} else {
  document.querySelector('.contact-small').style.display = "none";
}

const mediaQueryPhone = window.matchMedia('(max-width: 426px)')
if (mediaQueryPhone.matches){
  document.querySelector('nav').style.minHeight = '3vh';
  document.querySelector('#socil-media').style.width = '10vh'
  document.querySelector('#search-addon').style.width = '200px'
} else {

}

// Click to open Login page
// let logIn = document.querySelector('.openLogin');
// logIn.addEventListener('click', ()=>{
//     window.open(href="/pugFiles/signInUp.pug")
// });

function openLogin(){
    window.open("./pugFiles/signInUp.pug")
    document.querySelector(".open-Login");
}