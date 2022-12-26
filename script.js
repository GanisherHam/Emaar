// MAP LOCATION SECTION

function mapLocation() {
  const inputCard = document.querySelectorAll(".ml-form input");
  for (let key of inputCard) {
    key.onchange = function () {
      let indexOfInput = Array.from(inputCard).indexOf(key);
      if (indexOfInput == 2) {
        key.parentNode.parentElement.children[0].classList.remove("position");
        key.parentNode.parentElement.children[1].classList.remove("position");
        key.parentNode.parentElement.children[2].classList.remove("position");
      } else if (indexOfInput == 1) {
        key.parentNode.parentElement.children[0].classList.remove("position");
        key.parentNode.parentElement.children[2].classList.add("position");
        key.parentNode.parentElement.children[1].classList.add("position");
      } else if (indexOfInput == 0) {
        key.parentNode.parentElement.children[2].classList.add("position");
        key.parentNode.parentElement.children[1].classList.remove("position");
        key.parentNode.parentElement.children[0].classList.add("position");
      }
    };
  }
}

mapLocation();

// Slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

// FOOTER SHOW NUMBER
function showNumber() {
  const showBtn = document.querySelector(".fb-social p > button");
  const hiddenNumber = document.querySelector(".fb-social p");
  showBtn.addEventListener("click", (e) => {
    hiddenNumber.classList.toggle("active");
  });
}

showNumber();

// CTA POPUP FUCTION

function popUp(close, cont, btn) {
  const ctaBtn = document.querySelector(`.${close}`);
  const ctaContainer = document.querySelector(`.${cont}`);
  const seeMoreBtn = document.querySelector(`.${btn}`);

  seeMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    ctaContainer.classList.add("show");
    document.body.style.overflow = "hidden";
  });

  ctaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    ctaContainer.classList.remove("show");
    document.body.style.overflow = "";
  });

  window.addEventListener("click", (event) => {
    if (event.target == ctaContainer) {
      ctaContainer.classList.remove("show");
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.code === "Escape") {
      ctaContainer.classList.remove("show");
      document.body.style.overflow = "";
    }
  });
}

// CTA POPUP
popUp("cta__button", "cta-popup", "ps-content button");

// UNIQUE POPUP
popUp("unique__button", "unique-popup", "payment-detail button");
