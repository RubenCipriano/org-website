const navSlide = () => {
    const navLinks = document.querySelectorAll('.nav-links li');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation='';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
                console.log(index / 7 + 1.7);
            }
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();