const carrosselItems = [
    {
        image: './src/assets/capitao-america.jpg',
        title: 'Capitão América - R$29,90',
    },
    {
        image: './src/assets/hulk.jpg',
        title: 'Hulk - R$84,95',
    },
    {
        image: './src/assets/homem-aranha.jpg',
        title: 'Homem Aranha - R$72,23',
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