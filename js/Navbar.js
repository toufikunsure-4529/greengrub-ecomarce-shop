// Navbar Toggle Functionality
const navbarToggleBtn = document.getElementById("navbarToggle");

navbarToggleBtn.addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("open");
  const icon = navbarToggleBtn.querySelector("i");
  if (mobileMenu.classList.contains("open")) {
    icon.classList.remove("bi-justify-left");
    icon.classList.add("bi-x-lg");
  } else {
    icon.classList.remove("bi-x-lg");
    icon.classList.add("bi-justify-left");
  }
});
