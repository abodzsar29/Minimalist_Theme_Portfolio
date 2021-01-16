var lastScrollTop = 0;
navbar = document.getElementById("nav");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document
    .documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-10vh";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop
});


// Allows the navbar menu points to have a smooth scroll effect when clicked
const scroll = new SmoothScroll('#nav a[href*="#"]', {
  speed: 500
});
