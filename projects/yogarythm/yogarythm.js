import testimonialsData from '../yogarythm/data.js'


const menubtn = document.getElementById('hamburguer')
const navMenu = document.getElementById('nav-menu')
const menulist = document.getElementById('menu-list')

const carouselItem = document.getElementById('carousel-item')

let hamburguerIsOpen = false;

navMenu.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
})

menubtn.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('click - para abrir')
    // reveal ul element
    hamburguerIsOpen = true;
    menulist.classList.add('active')
    menulist.classList.remove('hide')
    navMenu.classList.add('active')
})

window.addEventListener('click', (e) => {
    if (hamburguerIsOpen) {
        console.log('click - para fechar')
        hamburguerIsOpen = false;
        menulist.classList.remove('active')
        menulist.classList.add('hide')
        navMenu.classList.remove('active')
    }
})

// ---------------------------------------

function renderTestimonial(testimonialsData){
    const userNameEl = document.getElementById('user-name');
    const carouselItem = document.getElementById('carousel-item')
    testimonialsData.forEach(testimonial => {
        console.log(testimonial)
        userNameEl.textContent = `${testimonial.userName}`
        carouselItem.appendChild(userNameEl)
    })
}

// function renderUserName(testimonialsData){
//     const userNameEl = document.getElementById('user-name');
//     userNameEl.textContent = `${testimonialsData.userName}`;
//     carouselItem.appendChild(userNameEl)
// }

// function renderTestimonial(testimonialsData){
//     const carouselItem = document.getElementById('carouselItem')
//     testimonialsData.forEach(testimonial =>{
//         carouselItem.innerHTML += testimonial
//     })
// }

// renderUserName()
renderTestimonial()
console.log(renderTestimonial(testimonialsData))

export default renderUserName