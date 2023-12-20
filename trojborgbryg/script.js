let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");

  // Added code to close the menu when a link is clicked
  let navLinks = document.querySelectorAll(".nav-links");
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      mainNav.classList.remove("active");
    });
  });
});