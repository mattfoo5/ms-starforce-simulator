
let itemLevel = 160;

function calculateCost() {
    let mesoCost = 0;
    if (currStar >= 0 && currStar < 10) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * (currStar + 1) / 2500 + 10); 
    } 
    else if (currStar === 10) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * ((currStar + 1) ** 2.7) / 40000 + 10);
    }
    else if (currStar === 11) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * ((currStar + 1) ** 2.7) / 22000 + 10);
    }
    else if (currStar === 12) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * ((currStar + 1) ** 2.7) / 15000 + 10);
    }
    else if (currStar === 13) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * ((currStar + 1) ** 2.7) / 11000 + 10);
    }
    else if (currStar === 14) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * ((currStar + 1) ** 2.7) / 7500 + 10);
    }
    else if (currStar >= 15 && currStar < 25) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * ((currStar + 1) ** 2.7) / 22000 + 10);
    }
    return mesoCost;
}

function updateCost() {
    console.log('here');
    newCost = calculateCost();
    document.getElementById('meso-cost').textContent = newCost.toLocaleString();
}

function initStartup() {
    initStar = 0;
    initCost = 100 * Math.round((itemLevel ** 3) * (initStar + 1) / 2500 + 10);
    document.getElementById('curr-star').textContent = 0;
    document.getElementById('next-star').textContent = 1;
    document.getElementById('meso-cost').textContent = initCost.toLocaleString();
}

window.onload = initStartup(); 