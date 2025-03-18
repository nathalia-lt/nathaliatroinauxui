
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
        header.style.backgroundColor = 'var(--white-color)';
    } else {
        // Optionally, reset the background color if the user scrolls back up
        header.style.backgroundColor = 'transparent';
    }
});