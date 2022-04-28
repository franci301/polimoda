// this file performs all the calculations and returns and array with the index of the group according to the cutoff point of 0.5
import calculateResults from "./calculateTestResults.js";
import calculatePercentages from "./calculatePercentages.js";
// uncomment to run jest tests
// const calculateResults = require("./calculateTestResults.js");
// const calculatePercentages = require("./calculatePercentages.js");

function findCutOff(values) {
    var products = [];
    for (let index = 0; index < values.length; index++) {
        if (values[index] >= 0.5) {
            products.push(index);
            // [index, values[index]] add if you want to add the value of the archetype
        }
    }
    return products;
}

function getMaxValues(allPercentages) {
    // finds the top 3 highest values in the array
    // var duplicateArr = []
    let values = [];
    for (let index = 0; index < allPercentages.length; index++) {
        values.push([index, allPercentages[index]]);
    }
    values.sort((a, b) => b[1] - a[1]);
    const a = values.slice(0, 3);
    return a;
    // for the duplicate percentages I get 
    // for (let index = 0; index < allPercentages.length; index++) {
    //     if (allPercentages[index] === a[2]) {
    //         duplicateArr.push(index);
    //     }
    // }
    // console.log("Duplicate Array", duplicateArr)
}

function makeNestedArr(answers) {
    let nestedArr = [];
    let arr = []
    let counter = 0;
    for (let index = 0; index < answers.length; index++) {
        if (counter >= 3) {
            nestedArr.push(arr);
            arr = []
            counter = 0;
        }
        arr.push(answers[index]);
        counter++
    }
    nestedArr.push(arr);
    return nestedArr;
}

function master(answers) {
    // returns all groups the user will be shown
    const testAnswers = makeNestedArr(answers);
    console.log("testAnswers", testAnswers);
    const percentageArr = calculateResults(testAnswers);
    console.log("Percentages Array", percentageArr.sort((a, b) => b - a))
    const maxValues = getMaxValues(percentageArr);
    console.log("Max Values", maxValues)
    const productValues = calculatePercentages(percentageArr, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    // console.log("Products Array", productValues);
    const cutOff = findCutOff(productValues);
    console.log("Cut Off", cutOff);
    return cutOff;
}

function showPercentages(answers) {
    // returns the percentage of the top 3 archetypes
    const testAnswers = makeNestedArr(answers);
    console.log("testAnswers", testAnswers);
    const percentageArr = calculateResults(testAnswers);
    console.log("Percentages Array", percentageArr);
    const maxValues = getMaxValues(percentageArr);
    console.log("Max Values", maxValues);
    return maxValues;
}

// showPercentages([
//     5, 0, 5,
//     2, 0, 4,
//     2, 5, 4,
//     3, 1, 2,
//     4, 2, 1,
//     6, 2, 0,
//     1, 4, 6,
//     0, 3, 3,
//     3, 5, 5,
//     4, 5, 2,
//     5, 4, 2,
//     6, 0, 1
// ])

// module.exports = master;
export default { master, showPercentages };