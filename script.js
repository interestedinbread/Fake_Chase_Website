const projectModalArr = [
  {
    img: "img/pexels-binyaminmellish-1396122.jpg",
    title: "Cain",
    h4: "Quality craftsmanship and nothing else",
    desc: "This project was a dream to build. The open space plan and the large windows allow for tons of natural light to enter the home. The monochromatic blue colour palette of the slats was chosen to create a warmth and contemporary feel upon entry.",  },
  {
    img: "img/pexels-binyaminmellish-1396132.jpg",
    title: "Cottage Way",
    h4: "A stunning custom home with ocean views",
    desc: "This family-style oasis is perfect for a relaxing day surrounded by nature or for a growing family to build memories. The two-storey home was built in 2017. It has a metal roof, covered front deck, open plan kitchen, dining and living room area are cozy, compact and well laid out."
  },
  {
    img: "img/pexels-frans-van-heerden-201846-1438832.jpg",
    title: "Cayzer",
    h4: "Quality craftsmanship and nothing else",
    desc: "This project was a dream to build. The open space plan and the large windows allow for tons of natural light to enter the home. The monochromatic blue colour palette of the slats was chosen to create a warmth and contemporary feel upon entry.",  },
  {
    img: "img/photo-1572120360610-d971b9d7767c.jpg",
    title: "Gossip",
    h4: "The custom rustic aesthetic was requested by the homeowners to blend in with the natural surrounding scenery.",
    desc: "The attention to detail and expertise of construction is evident in this custom build. Cedar frames give a rustic aesthetic welcomed by ocean and harbour views.",  },
  {
    img: "img/premium_photo-1661954372617-15780178eb2e.jpg",
    title: "Farmhouse",
    h4: "Quality craftsmanship and nothing else",
    desc: "This project was a dream to build. The open space plan and the large windows allow for tons of natural light to enter the home. The monochromatic blue colour palette of the slats was chosen to create a warmth and contemporary feel upon entry.",  },
];

const projectTiles = [
  {
    img: "img/pexels-binyaminmellish-1396122.jpg",
    title: "Cain",
  },
  {
    img: "img/pexels-binyaminmellish-1396132.jpg",
    title: "Cottage Way",
  },
  {
    img: "img/pexels-frans-van-heerden-201846-1438832.jpg",
    title: "Cayzer",
  },
  {
    img: "img/pexels-photo-106399.jpeg",
    title: "Gossip",
  },
  {
    img: "img/photo-1572120360610-d971b9d7767c.jpg",
    title: "Farmhouse",
  },
];

const testimonialsArr = [
  {
    testimonial:
      "Chase McMillan is by my standards (they are very high) to be one of the best overall builders I have had the privilege to contract. Building is a passion and Chase has fully embraced it! He has worked on many aspects of renovation and new builds on my property. I could never be happier with the high-quality results.",
    author: "- Derrick Lloyd",
  },
  {
    testimonial:
      "After much research and planning, we agreed to contract with Chase Mcmillan to construct our natural rock retaining wall and new access stairs to the beach including a new gate and railing. We are thrilled with the exceptional work done by him and his crew and would recommend him for any large-scale project.",
    author: "- Someone",
  },
  {
    testimonial:
      "We have used Chase's services several times and would highly recommend him. He is knowledgeable and does high-quality work. He is reliable and easy to communicate with.",
    author: "- Shelagh and Kieth",
  }
];

const projectModal = document.querySelector(".project-modal");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector("nav");
const navHeight = nav.getBoundingClientRect().height;
const testimonialsSection = document.querySelector(".testimonials-section");
const testimonialContainers = document.querySelectorAll(".testimonial-container");
const linkBtns = document.querySelectorAll(".link");
const navlinkBtns = nav.querySelectorAll(".link");
const navLogo = document.querySelector(".logo-container");
const navLinks = document.querySelector('.nav-links');
const menuToggleBtn = document.querySelector(".small-screen-menu-toggle");

const testimonialBtnLeft = document.querySelector(
  ".testimonials-btn-container .fa-chevron-left"
);
const testimonialBtnRight = document.querySelector(
  ".testimonials-btn-container .fa-chevron-right"
);

let currentProject = 0;

// DISPLAY PROJECTS

const renderProjectTiles = () => {
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

// SET POSITION FOR TESTIMONIALS

  testimonialContainers.forEach((container, index) => {
    container.style.left = `${index * 100}%`;
  })



// SET UP BTNS FOR BROWSING TESTIMONIALS

let reviewCounter = 0;

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
  

// SHOW AND HIDE MODAL

const displayModal = () => {
  projectModal.classList.remove("hidden");
  projectModal.classList.add("show-modal");
  overlay.classList.remove("hidden");

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

  const modalBtnSetup = () => {
    const leftBtn = projectModal.querySelector(".fa-chevron-left");
    const rightBtn = projectModal.querySelector(".fa-chevron-right");
    const closeBtn = projectModal.querySelector(".close-btn");
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    leftBtn.addEventListener("click", chevronClickHandler);
    rightBtn.addEventListener("click", chevronClickHandler);
  };

  modalBtnSetup();
};

// SETUP FIXED NAVBAR

const fixNav = () => {
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

// SETUP SMOOTH SCROLL LINKS

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

// SETUP HEADER FOR NARROW DISPLAY

window.addEventListener("scroll", fixNav);

renderProjectTiles();

testimonialBtnLeft.addEventListener("click", testimonialBtnClickHandler);
testimonialBtnRight.addEventListener("click", testimonialBtnClickHandler);
linkBtns.forEach(btn => {
  btn.addEventListener('click', navlinkClickHandler)
})
navLogo.addEventListener('click', function () {
  if(navLinks.getBoundingClientRect().height === 200){
    navLinks.classList.toggle('display-links');
  }
  window.scrollTo({
    left: 0,
    top: 0,
  })
})

// SET UP SMALL SCREEN MENU TOGGLE

menuToggleBtn.addEventListener('click', function () {
  navLinks.classList.toggle('display-links');
})

// SET UP NAV LINKS FOR NARROW DISPLAY

navlinkBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    if(navLinks.getBoundingClientRect().height === 200){
      navLinks.classList.toggle('display-links');
    }
  })
})

window.addEventListener('scroll', function() {
  if(scrollY === 0 && navLinks.getBoundingClientRect().height === 200){
    navLinks.classList.toggle('display-links');
  }
})