document.addEventListener('DOMContentLoaded', () => {
    const top = document.getElementById('top');
    const bottom = document.getElementById('bottom');
    const topColorInput = document.getElementById('topColor');
    const bottomColorInput = document.getElementById('bottomColor');
    const randomizeButton = document.getElementById('randomizeButton');
    const saveButton = document.getElementById('saveButton');

    topColorInput.addEventListener('input', () => {
        top.style.backgroundColor = topColorInput.value;
    });

    bottomColorInput.addEventListener('input', () => {
        bottom.style.backgroundColor = bottomColorInput.value;
    });

    randomizeButton.addEventListener('click', () => {
        const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        topColorInput.value = randomColor();
        bottomColorInput.value = randomColor();
        top.style.backgroundColor = topColorInput.value;
        bottom.style.backgroundColor = bottomColorInput.value;
    });

    saveButton.addEventListener('click', () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push({
            topColor: top.style.backgroundColor,
            bottomColor: bottom.style.backgroundColor
        });
        localStorage.setItem('favorites', JSON.stringify(favorites));
    });
});