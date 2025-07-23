
console.log('home.js');
const ux_title = document.getElementById('ux_title');

setTimeout(() => {
    if (ux_title.classList.contains('new-color')) {
        console.log('should remove new-color');
        ux_title.classList.remove('new-color');
    } else {
        console.log('should add new-color');
        ux_title.classList.add('new-color');
    }
}, 1500);

// change  header background color

let header = document.getElementById("header");

window.addEventListener('scroll', function () {
    // Get the current scroll position
    let scrollPosition = window.scrollY;

    // Define the scroll position where you want the color to change
    let triggerPosition = 200; // Example: change after scrolling 100 pixels

    // Check if the scroll position is past the trigger position
    if (scrollPosition > triggerPosition) {
        // Change the background color
        header.style.backgroundColor = 'var(--background-color)';
    } else {
        // Optionally, reset the background color if the user scrolls back up
        header.style.backgroundColor = 'transparent';
    }
});

// The aria-expanded attribute is set on an element to indicate if a control is expanded or collapsed, and whether or not the controlled elements are displayed or hidden.
// aria-label and aria-expanded for screen readers.

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
  
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });
  });


//   Modal functionality
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Scroll to top functionality
//esta dando conflito com o scroll do transparent header 
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

// When the user scrolls down, show or hide the button
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
  