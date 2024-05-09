import testimonialsData from '../yogarythm/data.js'

let currentTestimonial = 0;

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
// 



//  renderizar apenas 1 de cada vez / uma opcao é fazer assim
// O template já está no HTML
function renderTestimonial(testimonial) {
    console.log(testimonial)
    const userNameEl = document.getElementById('testimonial-user-name');
    const avatarEl = document.getElementById('testimonial-avatar');
    const testimonialEl = document.getElementById('testimonial');
    const testimonialDateEl = document.getElementById('testimonial-date');
    userNameEl.textContent = testimonial.userName;
    avatarEl.src = testimonial.avatar;
    testimonialEl.textContent = testimonial.review
    testimonialDateEl.textContent = testimonial.date
    //`text ${variavel} continue text`
}

// 1. Renderizar todos de uma vez e manter apenas 1 visivel e os outros invisíveis 
// ou  e substituir a cada click intervalo de tempo
// O template tem que ser criado no JS

function testimonialTemplate(testimonial) {
    let className = '';
    if (testimonial.id == 0) {
        className = 'active';
    }

    return `
    <div id="carousel-item" class="carousel-item ${className}" data-id="${testimonial.id}">
        <div class="carousel-avatar">
            <img id="testimonial-avatar" src="${testimonial.avatar}" alt="avatar" />
        </div>
        <p id="testimonial-user-name">${testimonial.userName}</p>
        <p id="testimonial">${testimonial.review}</p>
        <p id="testimonial-date">${testimonial.date}</p>
    </div>`
}

function renderTestimonials(testimonialsData) {
    const carousel = document.getElementById('carousel');
    console.log(carousel);
    carousel.innerHTML = ''
    // para cada informacao eu puxo o template
    testimonialsData.forEach(testimonial => {
        let template = testimonialTemplate(testimonial);
        // inner pq é texto e nao um elemento (se fosse el seria append)
        carousel.innerHTML += template;
    })
}


renderTestimonials(testimonialsData);

setInterval(function () {
    const testimonialBulletBefore = document.querySelector(`.testimonial-bullet[data-id='${currentTestimonial}']`);
    testimonialBulletBefore.classList.remove('active');

    const testimonialItemBefore = document.querySelector(`.carousel-item[data-id='${currentTestimonial}']`);
    testimonialItemBefore.classList.remove('active');

    currentTestimonial += 1;
    if (currentTestimonial >= testimonialsData.length) {
        currentTestimonial = 0;
    }

    const testimonialItemAfter = document.querySelector(`.carousel-item[data-id='${currentTestimonial}']`);
    testimonialItemAfter.classList.add('active');

    const testimonialBulletAfter = document.querySelector(`.testimonial-bullet[data-id='${currentTestimonial}']`);
    testimonialBulletAfter.classList.add('active');
}, 3000)

// aqui eu to dizendo qual o testimonnial eu estou chamando , o primerio.
// renderTestimonial(testimonialsData[currentTestimonial]);


// setInterval(function () {
//     const testimonialBulletBefore = document.querySelector(`.testimonial-bullet[data-id='${currentTestimonial}']`);

//     testimonialBulletBefore.classList.remove('active');
//     currentTestimonial += 1;
//     if (currentTestimonial >= testimonialsData.length) {
//         currentTestimonial = 0;
//     }
//     renderTestimonial(testimonialsData[currentTestimonial]);
//     const testimonialBulletAfter = document.querySelector(`.testimonial-bullet[data-id='${currentTestimonial}']`);
//     testimonialBulletAfter.classList.add('active');
// }, 3000)

