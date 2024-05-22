
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
const container = document.querySelector('.section-one-left-content');

// Loop through the array and append each item to the container
products.forEach(product => {
    const p = document.createElement('p');
    p.textContent = product;
    container.appendChild(p);
});

  
  