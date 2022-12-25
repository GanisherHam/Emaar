// const inputCard = document.querySelectorAll(".ml-form input");
// const labelCard = document.querySelectorAll(".ml-form label");

// key.oninput = function () {
//   for (let key of Array.from(inp)) {
//     if (key.checked) {
//       if (Array.from(inputCard).indexOf(key) == 2) {
//         Array.from(labelCard)[2].style.top = "2%";
//       } else if (Array.from(inputCard).indexOf(key) == 1) {
//         Array.from(labelCard)[1].style.top = "-50%";
//       }
//     }
//   }
// };

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

function showNumber() {
  const showBtn = document.querySelector(".fb-social p > button");
  const hiddenNumber = document.querySelector(".fb-social p");
  showBtn.addEventListener("click", (e) => {
    hiddenNumber.classList.toggle("active");
  });
}

showNumber();
