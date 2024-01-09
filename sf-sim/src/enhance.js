let currStar = 0;
let nextStar = 1;

const enhanceButton = document.getElementById('enhance-button');
enhanceButton.addEventListener('click', enhance);

function renderStars(star) {
    /* TODO: create visual stars UI */
    updateRates(star);
    updateCost(star);
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
        //currProb = getCurrProbabilities(star);
        success = currProb.success; // defines upper limit of success chance
        failure = currProb.failure + success; // defines upper limit of failure chance
        destruction = 100 - currProb.destruction; // defines lower values of boom chance
    }
    console.log(success, failure, destruction);
    console.log(randVal);
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

function enhance() {
    if (currStar !== 25) {
        let isStarcatch = document.getElementById('sc-check').checked;
        let isSafeguarded = document.getElementById('sg-check').checked;
        let randomValue = Math.random() * 100;
        let outcome = getOutcome(randomValue, currStar, isStarcatch);
        console.log(outcome);
        if (outcome === 'success') {
            currStar++;
        } else if (outcome === 'fail') {
            if (currStar > 15 && currStar !== 20) {
                currStar--;
           }
        }
        else { // if outcome is destruction
            if (isSafeguarded) {
                if (currStar === 15) { // if current star is 15, star remains the same
                    /* do nothing */
                }
                else if (currStar === 16) { // if current star is 16, reduce the star
                    currStar--;
                }
                else { // if current star is neither 15 nor 16, destruction occurs
                    currStar = 12;
                }
            }
            else { // if not safeguarded, destruction occurs
                currStar = 12;
            }
        }
        nextStar = currStar + 1;
        //renderProbabilities(star);
        renderStars(currStar);
    }
    else {
        alert('Max starforce achieved, cannot enhance');
    }
    
}