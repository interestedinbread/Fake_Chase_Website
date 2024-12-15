// IMPORTS

import { nav, menuToggleBtn, navLinks, linkBtns, navLogo, navlinkBtns, navHeight } from "./dom.js";

// TOGGLE FIXED NAVBAR

export const fixNav = () => {
    let scrollHeight = window.scrollY;
    if (scrollHeight > navHeight) {
      nav.classList.add("nav-fixed");
      menuToggleBtn.classList.add("menu-toggle-fixed");
    }
    if (scrollHeight < navHeight) {
      nav.classList.remove("nav-fixed");
      menuToggleBtn.classList.remove("menu-toggle-fixed");
    }
  };
  
  // SMOOTH SCROLL NAV LINKS
  
const navlinkClickHandler = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    if(navLinks.getBoundingClientRect().height === 200 && window.scrollY === 0){
      let position = element.offsetTop - (navHeight + 260);
      window.scrollTo({
        left: 0,
        top: position
      }) 
    } else {
     let position = element.offsetTop - (navHeight + 10);
     window.scrollTo({
      left: 0,
      top: position
    }) 
    }
  }


// NAVBAR INITIALIZATION FUNCTION

export const navbarInit = () => {
// nav link event listeners

linkBtns.forEach(btn => {
    btn.addEventListener('click', navlinkClickHandler)
  })
  
  // nav logo event listener
  
  navLogo.addEventListener('click', function () {
    if(navLinks.getBoundingClientRect().height === 200){
      navLinks.classList.toggle('display-links');
    }
    window.scrollTo({
      left: 0,
      top: 0,
    })
  })
  
  // small screen menu toggle
  
  menuToggleBtn.addEventListener('click', function () {
    navLinks.classList.toggle('display-links');
  })
  
  // set up nav links for narrow display
  
  navlinkBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      if(navLinks.getBoundingClientRect().height === 230){
        navLinks.classList.toggle('display-links');
      }
    })
  })
  
  // narrow display navlinks menu close at top of page
  
  window.addEventListener('scroll', function() {
    if(scrollY === 0 && navLinks.getBoundingClientRect().height === 230){
      navLinks.classList.toggle('display-links');
    }
  })

}
  
