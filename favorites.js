document.addEventListener('DOMContentLoaded', () => {
    const favoritesList = document.getElementById('favoritesList');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const renderFavorites = () => {
        favoritesList.innerHTML = '';
        favorites.forEach((favorite, index) => {
            const favoriteItem = document.createElement('div');
            const topFavColor = document.createElement('div');
            const bottomFavColor = document.createElement('div');
            const deleteButton = document.createElement('button');

            topFavColor.classList.add('favoritesColor');
            topFavColor.style.backgroundColor = favorite.topColor;

            bottomFavColor.classList.add('favoritesColor');
            bottomFavColor.style.backgroundColor = favorite.bottomColor;

            deleteButton.textContent = '削除';
            deleteButton.classList.add('deleteButton');
            deleteButton.addEventListener('click', () => {
                favorites.splice(index, 1);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                renderFavorites();
            });

            favoriteItem.appendChild(topFavColor);
            favoriteItem.appendChild(bottomFavColor);
            favoriteItem.appendChild(deleteButton);

            favoritesList.appendChild(favoriteItem);
        });
    };

    renderFavorites();
});
