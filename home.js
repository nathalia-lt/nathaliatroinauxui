
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

