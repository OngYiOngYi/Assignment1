
let slideIndex = 0;  // Start with 0
showSlides();  // Show current slide

function showSlides() {
  let i;
  // Get all the elements with the class "mySlides"
  let slides = document.getElementsByClassName("mySlides");
  // Get all the elements with the class "dot"
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";   // Hide element without deleting 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}  // Goes back to first slide if current one is last

  // Dots for current slide
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");   // Replace classname to blank for all elements with dots
  }

  slides[slideIndex-1].style.display = "block";  // Start on new line
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}