let currStar = 0;
let prevStar = -1;
let nextStar = 1;
let chanceCount = 0;

const enhanceButton = document.getElementById('enhance-button');
enhanceButton.addEventListener('click', enhance);

function renderStars(star, count) {
    if (count === 2) {
        updateToChanceRates(star);
        updateCost(star);
        document.getElementById('enhance-button').style.backgroundColor = 'rgba(234, 218, 73, 0.7)';
        document.getElementById('enhance-button').textContent = 'Chance Time!';
        document.getElementById('enhance-button').style.fontSize = '10px';
    }
    else {
        updateRates(star);
        updateCost(star);
        document.getElementById('enhance-button').style.backgroundColor = 'rgba(80, 200, 120, 0.7)';
        document.getElementById('enhance-button').textContent = 'Enhance';
        document.getElementById('enhance-button').style.fontSize = '14px';
    }
    document.getElementById('curr-star').textContent = currStar;
    document.getElementById('next-star').textContent = nextStar;
}

function getOutcome(randVal, star, starcatch) {
    let success, failure, destruction;
    let currProb = getCurrProbabilities(star);
    if (starcatch) {
        if (star < 15) {
            success = currProb.success * 1.05;
            failure = 100;
            destruction = 100 - currProb.destruction; 
        }
        else {
            let destructionOrig = getBoomProbabilities(star).destruction;
            success = currProb.success * 1.05
            failure = (100 - success) * ((100 - destructionOrig) / 100) + success;
            destruction = 100 - ((100 - success) * (destructionOrig / 100));
        } 
    }
    else {
        success = currProb.success; // defines upper limit of success chance
        failure = currProb.failure + success; // defines upper limit of failure chance
        destruction = 100 - currProb.destruction; // defines lower values of boom chance
    }
    let ret = '';

    if (randVal <= success) {
        ret = 'success';
    } else if (randVal > success && randVal < destruction) {
        ret = 'fail';
    }
    else if (randVal >= destruction) {
        ret = 'boom';
    }
    return ret;
}

function updateChanceCount(star) {
    if (star === 16 && chanceCount === 1) {
        chanceCount++;
    }
    else if (star >= 16 && star < 20 && chanceCount === 0) {
        chanceCount++;
    }
    else if (star >= 21) {
        chanceCount++;
    }
} 

function isChanceTime () {
    if (chanceCount === 2) {
        chanceCount = 0;
        return true;
    }
    return false;
}

function enhance() {
    if (currStar !== 25) {
        let isStarcatch = document.getElementById('sc-check').checked;
        let isSafeguarded = document.getElementById('sg-check').checked;
        let randomValue = Math.random() * 100;
        let outcome = ''; 
        
        if (isChanceTime()) {
            outcome = 'success';
        } else {
            outcome = getOutcome(randomValue, currStar, isStarcatch);
        } 
        if (outcome === 'success') {
            chanceCount = 0;
            currStar++;
        } else if (outcome === 'fail') {
            if (currStar === 15 || currStar === 20) {
                chanceCount = 0;
            }
            if (currStar > 15 && currStar !== 20) {
                chanceCount++;
                currStar--;
           }
        } else { // if outcome is destruction
            if (isSafeguarded) {
                if (currStar === 15) { // if current star is 15, star remains the same
                    /* do nothing */
                }
                else if (currStar === 16) { // if current star is 16, reduce the star
                    currStar--;
                }
                else { // if current star is neither 15 nor 16, destruction occurs
                    chanceCount = 0;
                    currStar = 12;
                }
            }
            else { // if not safeguarded, destruction occurs
                chanceCount = 0;
                currStar = 12;
            }
        }
        nextStar = currStar + 1; // next star variable is for display purposes on ui
        //renderProbabilities(star);
        renderStars(currStar, chanceCount);
    }
    else {
        alert('Max starforce achieved, cannot enhance');
    }
}