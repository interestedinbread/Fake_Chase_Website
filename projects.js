// IMPORTS

import { projectTiles, projectModalArr } from "./arrays.js";
import { projectModal, overlay } from "./dom.js";


// DISPLAY PROJECTS

export const renderProjectTiles = () => {
    const projectSection = document.querySelector(".projects-section-2");
  
    projectTiles.forEach((project) => {
      const tile = document.createElement("div");
      tile.classList.add("project-pic-box");
      tile.innerHTML = `<img src="${project.img}">
        <h4>${project.title}</h4>`;
      projectSection.append(tile);
    });
  
    const projectBoxes = document.querySelectorAll(".project-pic-box");
    projectBoxes.forEach((project) => {
      project.addEventListener("click", displayModal);
    });
  };

    // SHOW AND HIDE MODAL

const displayModal = () => {
    projectModal.classList.remove("hidden");
    projectModal.classList.add("show-modal");
    overlay.classList.remove("hidden");
}
  
const closeModal = () => {
      projectModal.classList.add("hidden");
      projectModal.classList.remove("show-modal");
      overlay.classList.add("hidden");
    };
  
  // SET UP MODAL AND FUNCTIONALITY

  // switch project

const chevronClickHandler = (e) => {
  if (e.target.classList.contains("fa-chevron-right")) {
    currentProject++;
  } else {
    currentProject--;
  }
  if (currentProject > projectModalArr.length - 1) {
    currentProject = 0;
  }
  if (currentProject < 0) {
    currentProject = projectModalArr.length - 1;
  }

  // update inner html

    projectModal.innerHTML = `<figure class="modal-figure">
    <div class="modal-img-container">
    <img src="${projectModalArr[currentProject].img}"/>
    </div>
    <span class="close-btn">&times;</span>
    <i class="fa-solid fa-chevron-left"></i>
    <i class="fa-solid fa-chevron-right"></i>
    <h4>${projectModalArr[currentProject].h4}</h4>
    <figcaption>${projectModalArr[currentProject].desc}</figcaption>
  </figure>`; 

  projectModal.style.opacity = 1;

  modalBtnSetup();

};

export const modalBtnSetup = () => {
  const leftBtn = projectModal.querySelector(".fa-chevron-left");
  const rightBtn = projectModal.querySelector(".fa-chevron-right");
  const closeBtn = projectModal.querySelector(".close-btn");
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  leftBtn.addEventListener("click", chevronClickHandler);
  rightBtn.addEventListener("click", chevronClickHandler);
};

