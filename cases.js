
// Scroll to top functionality
//esta dando conflito com o scroll do transparent header 
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

// When the user scrolls down, show or hide the button
window.addEventListener('scroll', function () {
  
  let top = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  if (top > height - 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// When the user clicks on the button, scroll to the top of the document
// const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
// scrollToTopBtn.addEventListener("click", function() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// });