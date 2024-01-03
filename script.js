let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slider');
    const totalSlides = slides.children.length;

    currentIndex += direction;

    if (currentIndex === totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const translateValue = -currentIndex * 100 + '%';
    slides.style.transform = 'translateX(' + translateValue + ')';
}
