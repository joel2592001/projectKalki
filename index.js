
const products = [
  "Pipes & Fittings",
  "Sewerage Drainage Pipes & Fittings",
  "Agriculture Pipes & Fittings",
  "Water Tanks",
  "Industrial Pipes & Fittings",
  "Cable Protection",
  "Fire Sprinklers Pipes & Fittings",
  "Urban Infrastructure",
  "Ancillary Products",
  "Solvent Cement",
  "Insulation Tube",
  "Specialty Fittings"
];


function modalOpenClose() {
    const navModal = document.getElementById("nav-modal");
    console.log(navModal.style.display,'navModal');
    if (navModal.style.display === "none" || navModal.style.display === "") {
      navModal.style.display = "block";
    } else {
      navModal.style.display = "none";
    }
  }


// Get the container element
const container = document.querySelector('.section-first-right-content-body');

// Loop through the array and append each item to the container
products.forEach(product => {
    const p = document.createElement('p');
    p.textContent = product;
    container.appendChild(p);
});


document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".section-one-right");
  const prevButton = document.querySelector(".section-one-bottom-prev");
  const nextButton = document.querySelector(".section-one-bottom-next");
  const totalItems = document.querySelectorAll(".section-one-right-img-card").length;
  let currentIndex = 0;

  function updateCarousel() {
      const transformValue = -currentIndex * 100;
      carousel.style.transform = `translateX(${transformValue}%)`;
  }

  prevButton.addEventListener("click", function () {
      if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
      }
  });

  nextButton.addEventListener("click", function () {
      if (currentIndex < totalItems - 1) {
          currentIndex++;
          updateCarousel();
      }
  });
});

  