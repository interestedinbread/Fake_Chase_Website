// IMPORTS

import { testimonialContainers } from "./dom.js";
  
  // SET UP BTNS FOR BROWSING TESTIMONIALS
  
  let reviewCounter = 0;

  const testimonialBtnLeft = document.querySelector(
    ".testimonials-btn-container .fa-chevron-left"
  );
  const testimonialBtnRight = document.querySelector(
    ".testimonials-btn-container .fa-chevron-right"
  );
  
  const testimonialBtnClickHandler = (e) => {
    if(e.target === testimonialBtnLeft){
      if(reviewCounter === 0){
        reviewCounter = testimonialContainers.length - 1;
      } else {
        reviewCounter--;
      }
      shiftTestimonials()
    }
    if(e.target === testimonialBtnRight){
      if(reviewCounter === testimonialContainers.length -1){
        reviewCounter = 0;
      } else {
        reviewCounter++;
      }
      shiftTestimonials()
    }
    };
  
  // SET LOGIC FOR SHIFTING TESTIMONIALS
  
    const shiftTestimonials = () => {testimonialContainers.forEach(container => {
      container.style.transform = `translateX(-${reviewCounter * 100}%)`;
    });
  };





// INITIALIZATION FUNCTION FOR TESTIMONIALS SECTION

export const testimonialsInit = () => {

    // event listeners

    testimonialBtnLeft.addEventListener("click", testimonialBtnClickHandler);
    testimonialBtnRight.addEventListener("click", testimonialBtnClickHandler);

    // set position

    testimonialContainers.forEach((container, index) => {
        container.style.left = `${index * 100}%`;
      })
}