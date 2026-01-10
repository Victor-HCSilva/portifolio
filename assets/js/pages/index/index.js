// Seleciona os elementos
const seta = document.querySelector(".seta")
const linkEspecial = document.querySelector("#link_sobre")
const color1 = "green";
const color2 = "blue";

if (seta && linkEspecial) {
    seta.style.color = color1;
    linkEspecial.style.color = color1;
    seta.style.fontSize = '1.4rem';

    setInterval(() => {
        seta.style.color = seta.style.color === color1 ? color2 : color1;
        linkEspecial.style.color = linkEspecial.style.color === color1 ? color2 : color1;
    }, 1000);
}

// Carousel Logic
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

if (carouselSlide && carouselImages.length > 0) {
    let counter = 0;

    // Ensure the first image is loaded or has width before calculating size
    // A simple fix is to check on window load or just use a default/safe initialization

    const updateCarousel = () => {
        const size = carouselImages[0].clientWidth;
        if (size > 0) {
            carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        }
    };

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) return;
        counter++;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        counter--;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
}

