var scoreValue = [0, 0.1, 0.3, 0.5, 0.6, 0.8, 1];
var archetypes = [
    "Cargiver", "Ruler", "Creator", "Sage",
    "Magician", "Explorer", "Everyman",
    "Jester", "Lover", "Hero", "Outlaw", "Innocent"
]

function sumIt(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function calculateResults(testAnswers) {
    var arr = [];
    for (let index = 0; index < testAnswers.length; index++) {
        var sum = 0;
        for (let x = 0; x < testAnswers[index].length; x++) {
            sum += scoreValue[testAnswers[index][x]]
        }
        arr.push(parseFloat(sum.toFixed(2)))
    }
    var percentageArr = [];
    var totSum = sumIt(arr);
    for (let index = 0; index < arr.length; index++) {
        percentageArr.push(parseFloat((arr[index] / (totSum)).toFixed(2)))
    }
    return percentageArr;
}
// console.log(calculateResults(testAnswers));
// module.exports = calculateResults;
export default calculateResults;