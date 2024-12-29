// IMPORTS

// import { nav, menuToggleBtn, navLinks, linkBtns, navLogo, navlinkBtns, navHeight } from "./dom.js";

import * as DOM from "./dom.js"

// TOGGLE FIXED NAVBAR

export const fixNav = () => {
    let scrollHeight = window.scrollY;
    if (scrollHeight > DOM.navHeight) {
      DOM.nav.classList.add("nav-fixed");
      DOM.menuToggleBtn.classList.add("menu-toggle-fixed");
    }
    if (scrollHeight < DOM.navHeight) {
      DOM.nav.classList.remove("nav-fixed");
      DOM.menuToggleBtn.classList.remove("menu-toggle-fixed");
    }
  };
  
  // SMOOTH SCROLL NAV LINKS
  
const navlinkClickHandler = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    if(DOM.navLinks.getBoundingClientRect().height === 200 && window.scrollY === 0){
      let position = element.offsetTop - (DOM.navHeight + 260);
      window.scrollTo({
        left: 0,
        top: position
      }) 
    } else {
     let position = element.offsetTop - (DOM.navHeight + 10);
     window.scrollTo({
      left: 0,
      top: position
    }) 
    }
  }


// NAVBAR INITIALIZATION FUNCTION

export const navbarInit = () => {
// nav link event listeners

DOM.linkBtns.forEach(btn => {
    btn.addEventListener('click', navlinkClickHandler)
  })
  
  // nav logo event listener
  
  DOM.navLogo.addEventListener('click', function () {
    if(DOM.navLinks.getBoundingClientRect().height === 200){
      DOM.navLinks.classList.toggle('display-links');
    }
    window.scrollTo({
      left: 0,
      top: 0,
    })
  })
  
  // small screen menu toggle
  
  DOM.menuToggleBtn.addEventListener('click', function () {
    DOM.navLinks.classList.toggle('display-links');
  })
  
  // set up nav links for narrow display
  
  DOM.navlinkBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      if(DOM.navLinks.getBoundingClientRect().height === 230){
        DOM.navLinks.classList.toggle('display-links');
      }
    })
  })
  
  // narrow display navlinks menu close at top of page
  
  window.addEventListener('scroll', function() {
    if(scrollY === 0 && DOM.navLinks.getBoundingClientRect().height === 230){
      DOM.navLinks.classList.toggle('display-links');
    }
  })

}
  
