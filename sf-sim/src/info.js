
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
    newCost = calculateCost();
    document.getElementById('meso-cost').textContent = newCost.toLocaleString();
}

function updateRates() {
    newSuccess = parseFloat(getCurrProbabilities(currStar).success).toFixed(1);
    newFailure = parseFloat(getCurrProbabilities(currStar).failure).toFixed(1);
    document.getElementById('success-chance').textContent = newSuccess;
    document.getElementById('failure-chance').textContent = newFailure;
}

function initStartup() {
    initStar = 0;
    initSuccess = parseFloat(getCurrProbabilities(initStar).success).toFixed(1);
    initFailure = parseFloat(getCurrProbabilities(initStar).failure).toFixed(1);
    initCost = 100 * Math.round((itemLevel ** 3) * (initStar + 1) / 2500 + 10);
    document.getElementById('curr-star').textContent = 0;
    document.getElementById('next-star').textContent = 1;
    document.getElementById('success-chance').textContent = initSuccess;
    document.getElementById('failure-chance').textContent = initFailure;
    document.getElementById('meso-cost').textContent = initCost.toLocaleString();
}

window.onload = initStartup(); 