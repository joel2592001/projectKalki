
function modalOpenClose() {
    const navModal = document.getElementById("nav-modal");
    console.log(navModal.style.display,'navModal');
    if (navModal.style.display === "none" || navModal.style.display === "") {
      navModal.style.display = "block";
    } else {
      navModal.style.display = "none";
    }
  }

  
  