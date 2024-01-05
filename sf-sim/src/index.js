let stars = 0;

const enhanceButton = document.getElementById('enhance-button');
enhanceButton.addEventListener('click', onButtonClick);

function renderStars() {
    /* TODO: create visual stars UI */
    document.getElementById('stars').textContent = stars;
}

function onButtonClick() {
    stars++;
    console.log(stars);
    renderStars();
}