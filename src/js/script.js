document.addEventListener("DOMContentLoaded", function () {
const carrosselItems = [
    {
        image: './src/assests/logo.png',
        title: 'Marvel Fantasias',
    },
     {
        image: './src/assests/capitao-america.png',
        title: 'Capitão América R$29,90',
    },
    {
        image: './src/assests/deadpool.png',
        title: 'Deadpool R$23,72',
    },
     {
        image: './src/assests/homem-aranha.png',
        title: 'Homem Aranha R$72,23',
    }
];
let i = 0;
const tempo = 4000; 
const carrosselElement = document.querySelector('.carrossel');
const carrosselTitulo = document.querySelector('.carrossel-titulo');
function slideShow() {
    carrosselElement.style.backgroundImage = `url(${carrosselItems[i].image})`;
    carrosselTitulo.textContent = carrosselItems[i].title;
    i++;
    if (i >= carrosselItems.length) {
        i = 0;
    }
    setTimeout(slideShow, tempo);
}
slideShow();
});