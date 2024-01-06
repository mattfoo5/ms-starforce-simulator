const probabilities = new Map([
    [0, { success: 95, failure: 5, destruction: 0}],
    [1, { success: 90, failure: 10, destruction: 0}],
    [2, { success: 85, failure: 15, destruction: 0}],
    [3, { success: 85, failure: 15, destruction: 0}],
    [4, { success: 80, failure: 20, destruction: 0}],
    [5, { success: 75, failure: 25, destruction: 0}],
    [6, { success: 70, failure: 30, destruction: 0}],
    [7, { success: 65, failure: 35, destruction: 0}],
    [8, { success: 60, failure: 40, destruction: 0}],
    [9, { success: 55, failure: 45, destruction: 0}],
    [10, { success: 50, failure: 50, destruction: 0}],
    [11, { success: 45, failure: 55, destruction: 0}],
    [12, { success: 40, failure: 60, destruction: 0}],
    [13, { success: 35, failure: 65, destruction: 0}],
    [14, { success: 30, failure: 70, destruction: 0}],
    [15, { success: 30, failure: 70, destruction: 0}],
    [16, { success: 30, failure: 67.9, destruction: 2.1}],
    [17, { success: 30, failure: 67.9, destruction: 2.1}],
    [18, { success: 30, failure: 67.2, destruction: 2.8}],
    [19, { success: 30, failure: 67.2, destruction: 2.8}],
    [20, { success: 30, failure: 63, destruction: 7}],
    [21, { success: 30, failure: 63, destruction: 7}],
    [22, { success: 3, failure: 77.6, destruction: 19.4}],
    [23, { success: 2, failure: 68.6, destruction: 29.4}],
    [24, { success: 1, failure: 59.4, destruction: 39.6}],
]); 

let currStar = 0;
let nextStar = 1;

const enhanceButton = document.getElementById('enhance-button');
enhanceButton.addEventListener('click', enhance);

function renderStars() {
    /* TODO: create visual stars UI */
    document.getElementById('curr-star').textContent = currStar;
    document.getElementById('next-star').textContent = nextStar;
}

function renderProbabilities(star) {
    /* TODO: create text for probabilities */
    let currProb = getCurrProbabilities(star);
    document.getElementById('probability-info')
}

function getCurrProbabilities(num) {
    return probabilities.get(num);
}

function getOutcome(randVal, star) {
    let currProb = getCurrProbabilities(star);
    success = currProb.success; // defines upper limit of success chance
    failure = currProb.failure + success; // defines upper limit of failure chance
    destruction = 100 - currProb.destruction; // defines lower values of boom chance
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
        console.log(isSafeguarded);
        let randomValue = Math.random() * 100;
        let outcome = getOutcome(randomValue, currStar);
        
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
                if (currStar === 16) { // if current star is 16, reduce the star
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
        renderStars();
    }
    else {
        alert('Max starforce achieved, cannot enhance');
    }
    
}