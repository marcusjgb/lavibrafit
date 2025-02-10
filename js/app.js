let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');  
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');      
}

// efecto tipado

const typed = new Typed('.multiple-text', {
    strings: ['Entrenamiento presencial', 'Asesorías online','Seguimiento constante','Coach cuántico','Terapeuta holistico'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});