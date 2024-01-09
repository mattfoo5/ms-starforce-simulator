
let itemLevel = 160;

function calculateCost(star) {
    let mesoCost = 0;
    if (star >= 0 && star < 10) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * (star + 1) / 2500 + 10); 
    } 
    else if (star === 10) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * ((star + 1) ** 2.7) / 40000 + 10);
    }
    else if (star === 11) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * ((star + 1) ** 2.7) / 22000 + 10);
    }
    else if (star === 12) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * ((star + 1) ** 2.7) / 15000 + 10);
    }
    else if (star === 13) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * ((star + 1) ** 2.7) / 11000 + 10);
    }
    else if (star === 14) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * ((star + 1) ** 2.7) / 7500 + 10);
    }
    else if (star >= 15 && currStar < 25) {
        mesoCost = 100 * Math.round((itemLevel ** 3) * ((star + 1) ** 2.7) / 20000 + 10);
    }
    return mesoCost;
}

function updateCost(star) {
    newCost = calculateCost(star);
    document.getElementById('meso-cost').textContent = newCost.toLocaleString();
}

function updateKeepDrop(star) {
    if (star <= 15 || star === 20) {
        document.getElementById('keep-drop').textContent = 'Keep';
    }
    else if (star > 15 && star < 20) {
        document.getElementById('keep-drop').textContent = 'Drop';
    }
    else if (star >= 21) {
        document.getElementById('keep-drop').textContent = 'Drop';
    }

}

function updateRates(star) {
    newSuccess = parseFloat(getCurrProbabilities(star).success).toFixed(1);
    newFailure = parseFloat(getCurrProbabilities(star).failure).toFixed(1);
    newBoom = parseFloat(getCurrProbabilities(star).destruction).toFixed(1);

    document.getElementById('success-chance').textContent = newSuccess;
    document.getElementById('failure-chance').textContent = newFailure;
    document.getElementById('boom-chance').textContent = newBoom;
    updateKeepDrop(star);
}

function initStartup() {
    initStar = 0;
    document.getElementById('curr-star').textContent = 0;
    document.getElementById('next-star').textContent = 1;

    updateRates(initStar);
    updateKeepDrop(initStar);

    initCost = calculateCost(initStar);
    document.getElementById('meso-cost').textContent = initCost.toLocaleString();
}

window.onload = initStartup(); 