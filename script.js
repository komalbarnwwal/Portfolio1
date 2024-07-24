Let menu = document.querySelector('menu-icon');
Let navbar = document.quertSelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

count sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay:20, origin: 'left'})