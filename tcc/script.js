let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100; // Mover a imagem com base no índice
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}