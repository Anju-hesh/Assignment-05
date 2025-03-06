var typed = new Typed(".who-i-am", {
    strings: [ "FrontEnd Developer","BackEnd Developer", "Software Engineer", "Web Developer", "FrontEnd Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.querySelector('.burger-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); 
});