
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelectorAll('.slide');
    const anterior = carousel.querySelector('.anterior');
    const proximo = carousel.querySelector('.proximo');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('slide-active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('slide-active');
    }

    proximo.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    anterior.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    showSlide(0);
