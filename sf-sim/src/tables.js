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
    [15, { success: 30, failure: 67.9, destruction: 2.1}],
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

const boomProbabilities = new Map([
    [15, {destruction: 3}],
    [16, {destruction: 3}],
    [17, {destruction: 3}],
    [18, {destruction: 4}],
    [19, {destruction: 4}],
    [20, {destruction: 10}],
    [21, {destruction: 10}],
    [22, {destruction: 20}],
    [23, {destruction: 30}],
    [24, {destruction: 40}], 
]);

function getCurrProbabilities(num) {
    return probabilities.get(num);
}

function getBoomProbabilities(num) {
    return boomProbabilities.get(num);
}

function renderProbabilities(star) {
    /* TODO: create text for probabilities */
    let currProb = getCurrProbabilities(star);
    document.getElementById('probability-info')
}