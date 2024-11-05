const backgrounds = [
    'images/background1.jpg',
    'images/background2.jpg',
    'images/background3.jpg',
    'images/background4.jpg'
];

let currentBackgroundIndex = 0;

const aquarium = document.getElementById('aquarium');

function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    aquarium.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
}

aquarium.addEventListener('click', changeBackground);
