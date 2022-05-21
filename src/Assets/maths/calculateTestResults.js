var scoreValue = [0, 0.1, 0.3, 0.5, 0.6, 0.8, 1];

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
            sum += scoreValue[testAnswers[index][x]];
        }
        arr.push(parseFloat(sum.toFixed(2)));
    }
    // percentage array maker needs to be a seperate function so i can see which percentage relates to which test answer
    //--> this is to select the answers with the higher scores if they have the same percentage
    var percentageArr = [];
    var totSum = sumIt(arr);
    for (let index = 0; index < arr.length; index++) {
        percentageArr.push(parseFloat((arr[index] / (totSum)).toFixed(2)));
    }
    let finalArray = [];
    for (let index = 0; index < percentageArr.length; index++) {
        finalArray[index] = (percentageArr[index]);
    }
    finalArray[0] = percentageArr[percentageArr.length - 1];
    // innocent is now first
    finalArray[1] = percentageArr[5];
    // explorer is not second
    finalArray[2] = percentageArr[3];
    // sage is now third
    finalArray[3] = percentageArr[9];
    // hero is 4th
    finalArray[4] = percentageArr[10];
    // outlaw if 5th
    finalArray[5] = percentageArr[4];
    // magician is 6th
    finalArray[6] = percentageArr[7];
    // jester is 7th
    finalArray[7] = percentageArr[8];
    // lover is 8th
    finalArray[8] = percentageArr[6];
    // everyman is 9th
    finalArray[9] = percentageArr[0];
    // caregiver is 10th
    finalArray[10] = percentageArr[2];
    // creator is 11th
    finalArray[11] = percentageArr[1];
    // ruler is 12th
    return finalArray; // sort array 
}
// const testAnswers = [
//         [5, 0, 5],
//         [2, 0, 4],
//         [2, 5, 4],
//         [3, 1, 2],
//         [4, 2, 1],
//         [6, 2, 0],
//         [1, 4, 6],
//         [0, 3, 3],
//         [3, 5, 5],
//         [4, 5, 2],
//         [5, 4, 2],
//         [6, 0, 1]
//     ]
// console.log(calculateResults(testAnswers));
module.exports = calculateResults;
// export default calculateResults;