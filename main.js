// IMPORTS

import { fixNav, navbarInit } from "./nav.js";
import { renderProjectTiles, modalBtnSetup } from "./projects.js";
import { testimonialsInit } from "./testimonials.js";

// RENDER PROJECTS

renderProjectTiles();

// INITIALIZE NAVBAR

navbarInit();

// INITIALIZE TESTIMONIALS

testimonialsInit();

// WINDOW SCROLL EVENT LISTENER

window.addEventListener("scroll", fixNav);

// INITIALIZE MODAL PROJECT NUMBER AND BUTTONS

let currentProject = 0;
modalBtnSetup();
