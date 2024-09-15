function updateTextBasedOnWindowSize() {
    const myElement = document.getElementById('about-title');
    if (window.innerWidth < 1440) {
        myElement.textContent = 'О компании';
    } else {
        myElement.textContent = 'Более 5 лет создаем мебель для вашего комфорта';
    }
}

updateTextBasedOnWindowSize();

window.addEventListener('resize', updateTextBasedOnWindowSize);


const humburgerIcon = document.querySelector('.icon');
humburgerIcon.addEventListener('click', (event) => {
    humburgerIcon.classList.toggle("open");
    document.getElementById("menu").classList.toggle("open");
});

