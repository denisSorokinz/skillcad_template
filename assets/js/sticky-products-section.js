// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

//Get the body
var body = document.body;

// Get the products section
var productsSection = document.getElementById("products-section");

// Get the offset position of the section
var sticky = productsSection.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    body.classList.add("body-padding");
    productsSection.classList.add("products-section-fixed");
  } else {
    body.classList.remove("body-padding");
    productsSection.classList.remove("products-section-fixed");
  }
}