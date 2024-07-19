// Product array
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

function modalOpenClose(event) {
  event.stopPropagation();
  const navModal = document.getElementById("nav-modal");
  if (navModal.style.display === "none" || navModal.style.display === "") {
      navModal.style.display = "block";
  } else {
      navModal.style.display = "none";
  }
}

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
  });
  const navModal = document.getElementById("nav-modal");
  navModal.style.display = "none"; // Close the modal after clicking a link
}

document.querySelectorAll('.header-content-container a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

window.addEventListener('resize', function() {
  const navModal = document.getElementById("nav-modal");
  if (window.innerWidth >= 768) {
      navModal.style.display = "none";
  }
});

// Close modal on initial load if window width is greater than or equal to 768px
document.addEventListener('DOMContentLoaded', function() {
  const navModal = document.getElementById("nav-modal");
  if (window.innerWidth >= 768) {
      navModal.style.display = "none";
  }
});

// Product list insertion
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.section-first-right-content-body');
  products.forEach(product => {
    const p = document.createElement('p');
    p.textContent = product;
    container.appendChild(p);
  });
});

// Carousel for main images
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.main-carousel');
  const dots = document.querySelectorAll('.main-carousel-dot');
  const captions = document.querySelector('.main-carousel-title');
  const headings = document.querySelector('.main-carousel-body');
  
  const slides = [
    {
      image: 'url(./assets/pipe_1.jpg)',
      caption: 'Unmatched Quality',
      heading: 'Experience superior durability and performance with KALKI PIPES advanced manufacturing.'
    },
    {
      image: 'url(./assets/pipe_4.jpg)',
      caption: 'Innovative Design',
      heading: 'Discover the advanced technology behind our superior PVC pipes.'
    },
    {
      image: 'url(./assets/pipe_5.jpg)',
      caption: 'Reliable Performance',
      heading: 'Trust in KALKI PIPES for long-lasting and efficient solutions.'
    }
  ];

  let currentIndex = 0;

  function changeSlide() {
    const slide = slides[currentIndex];
    
    carousel.style.backgroundImage = slide.image;
    
    // Transition content out
    captions.style.opacity = 0;
    headings.style.opacity = 0;

    // After the transition ends, change the content and transition it back in
    setTimeout(() => {
      captions.textContent = slide.caption;
      headings.textContent = slide.heading;
      captions.style.opacity = 1;
      headings.style.opacity = 1;
    }, 500); // Match the CSS transition duration
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
    
    currentIndex = (currentIndex + 1) % slides.length;
  }

  setInterval(changeSlide, 3000); // Change slide every 3 seconds

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      changeSlide();
    });
  });

  // Initial call to set the first slide
  changeSlide();
});

// Carousel for reviews
document.addEventListener('DOMContentLoaded', () => {     
  const wrapper = document.querySelector('.card-wrapper');
  const cards = document.querySelectorAll('.review-card');
  const dots = document.querySelectorAll('.dot');
  const totalCards = cards.length;
  let currentIndex = 0;
  let intervalId;

  // Cloning cards for infinite loop effect
  for (let i = 0; i < totalCards; i++) {
    const clone = cards[i].cloneNode(true);
    wrapper.appendChild(clone);
  }

  function updateDots(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index % totalCards);
    });
  }

  function startCarousel() {
    intervalId = setInterval(() => {
      currentIndex++;
      wrapper.style.transform = `translateX(-${currentIndex * 100}%)`; // Adjusted translateX value
      updateDots(currentIndex);

      // Reset the index and the transformation to create an infinite loop effect
      if (currentIndex >= totalCards) {
        setTimeout(() => {
          wrapper.style.transition = 'none';
          wrapper.style.transform = 'translateX(0)';
          currentIndex = 0;
          updateDots(currentIndex);
          setTimeout(() => {
            wrapper.style.transition = 'transform 0.5s ease';
          }, 50); // Small delay to ensure the transition is applied
        }, 500); // Match this delay with the transition duration
      }
    }, 2000); // Adjust the interval for how long each card stays in view
  }

  // Start the carousel initially
  startCarousel();

  // Pause carousel on hover
  wrapper.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
  });

  // Resume carousel on mouse leave
  wrapper.addEventListener('mouseleave', () => {
    startCarousel();
  });
});

// FAQ accordion
document.addEventListener('DOMContentLoaded', function() {
  const faqHeads = document.querySelectorAll('.faq-head');

  // Function to close all FAQs
  function closeAllFaqs() {
    faqHeads.forEach(faqHead => {
      const faqBody = faqHead.querySelector('.faq-body');
      faqHead.classList.remove('active');
      faqHead.style.border = '2px solid var(--LIGHT_GREY)';
      faqBody.style.display = 'none'; // Hide the body
    });
  }

  // Set initial open FAQ
  if (faqHeads.length > 0) {
    const initialFaq = faqHeads[0];
    initialFaq.classList.add('active');
    initialFaq.style.border = '2px solid gold';
    const initialFaqBody = initialFaq.querySelector('.faq-body');
    if (initialFaqBody) {
      initialFaqBody.style.display = 'block'; // Ensure the body is visible
    }
  }

  // Add click event listeners to each FAQ
  faqHeads.forEach(faqHead => {
    faqHead.addEventListener('click', function() {
      const faqBody = faqHead.querySelector('.faq-body');
      if (!faqHead.classList.contains('active')) {
        closeAllFaqs();
        faqHead.classList.add('active');
        faqHead.style.border = '2px solid gold';
        faqBody.style.display = 'block'; // Show the clicked FAQ body
      } else {
        faqHead.classList.remove('active');
        faqHead.style.border = '2px solid var(--LIGHT_GREY)';
        faqBody.style.display = 'none'; // Hide the clicked FAQ body
      }
    });
  });
});


// Product carousel content change
const text1_options = [
  "Sintaz Water Tank ",
  "Aspecta Sheet ",
  "Premium PVC Pipe for Water Supply",
];

const text2_options = [
  "High-grade water tank designed for durability and hygiene. Available in various capacities, perfect for residential, commercial, and industrial use. Ensures safe and clean water storage.",
  "Innovative cool roofing sheet designed to reduce heat absorption. Provides excellent durability and energy efficiency. Ideal for residential, commercial, and industrial roofing solutions.",
  "Durable and reliable PVC pipes available in sizes 10 mm to 100 mm. Ideal for high-pressure water supply and electrical insulation. Corrosion-resistant and long-lasting for various applications.",
];

const image_options = [
  "./assets/product_2.png",
  "./assets/product_3.png",
  "./assets/product_1.png",
];

const background_colors = [
  "rgb(255, 214, 221)", 
  "#d3ffd3", // Light green
  "#cce5ff", // Light blue
];

let currentIndex = 2;

function changeContent(direction) {
  if (direction === 'up') {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : text1_options.length - 1;
  } else if (direction === 'down') {
    currentIndex = (currentIndex < text1_options.length - 1) ? currentIndex + 1 : 0;
  }

  document.getElementById('text1').innerText = text1_options[currentIndex];
  document.getElementById('text2').innerText = text2_options[currentIndex];
  document.getElementById('carousel-image').src = image_options[currentIndex];
  document.getElementById('carousel-wrapper').style.backgroundColor = background_colors[currentIndex];
  document.getElementById('chevron-up').style.backgroundColor = background_colors[currentIndex];
  document.getElementById('chevron-down').style.backgroundColor = background_colors[currentIndex];
}
