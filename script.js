document.addEventListener("DOMContentLoaded", function () {
    const textToType = "Lorem ipsum dolor sit amet consectetur. Quia, aspernatur.";
    const typingElement = document.querySelector(".typing-text");
    let index = 0;
    function typeEffect() {
        if (index < textToType.length) {
            typingElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeEffect, 100); 
        }
    }
    typeEffect();
    
    let currentIndex = 0;
    const row = document.querySelector('.work-out-pho .container .row');
    function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    row.style.backgroundImage = `url(${images[currentIndex]})`;

    }

    row.style.backgroundImage = `url(${images[2]})`;
    setInterval(changeBackground, 2500);
});

document.querySelectorAll('.services .drop-to-down-eff').forEach((dropdown) => {
    const head = dropdown.querySelector('.head');
    const body = dropdown.querySelector('.body');
    const icon = dropdown.querySelector('.fa');

    head.addEventListener('click', () => {
        const iseff = dropdown.classList.toggle('eff');
        body.style.display = iseff ? 'block' : 'none';
        icon.style.transform = iseff ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});

const images = [
    '/assets/work-out-pho-1.jpg',
    '/assets/work-out-pho-2.jpg',
    '/assets/work-out-pho-3.jpg',
    '/assets/work-out-pho-4.jpg'
];
