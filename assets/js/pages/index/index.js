// Seleciona os elementos
const body = document.querySelector("body");
const change_color_button = document.querySelector("#change-color");
const seta = document.querySelector(".seta")
const linkEspecial = document.querySelector("#link_sobre")
const color1 = "green";
const color2 = "black";


seta.style.color = color1;
linkEspecial.style.color = color1;

seta.style.fontSize = '1.4rem';


setInterval(()=>{
    seta.style.color = seta.style.color === color1 ? color2 : color1;
    linkEspecial.style.color = linkEspecial.style.color === color1 ? color2 : color1;
},1000)

let isChanged = localStorage.getItem('colorPreference') === 'true';

// Aplica o tema salvo no carregamento
if(isChanged){
    body.classList.add('dark-mode');
}

function change_color() {
    body.classList.toggle('dark-mode');
    isChanged = !isChanged; // Alterna o estado
    localStorage.setItem('colorPreference', isChanged); // Salva a preferência
}


// Adiciona o evento de clique ao botão
const changeColorButton = document.getElementById("change-color");
changeColorButton.addEventListener("click", change_color);

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let counter = 0;
const size = carouselImages[0].clientWidth; // Largura de uma imagem
let slideWidth = size; // Largura inicial do slide

// Ajusta a largura do slide quando a janela é redimensionada
window.addEventListener('resize', () => {
    if(carouselImages[0].clientWidth){
        slideWidth = size;
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
});

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    counter++;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
});

addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Loaded and ready to go.');
  });