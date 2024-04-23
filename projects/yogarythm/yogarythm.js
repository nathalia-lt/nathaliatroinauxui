
const menubtn = document.getElementById('hamburguer')
const navMenu = document.getElementById('nav-menu')
const menulist = document.getElementById('menu-list')

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