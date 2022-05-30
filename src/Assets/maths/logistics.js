// this file performs all the calculations and returns and array with the index of the group according to the cutoff point of 0.5
// import calculateResults from "./calculateTestResults.js";
// import calculatePercentages from "./calculatePercentages.js";
// uncomment to run jest tests
const calculateResults = require("./calculateTestResults.js");
const calculatePercentages = require("./calculatePercentages.js");

function findCutOff(values) {
    var products = [];
    for (let index = 0; index < values.length; index++) {
        if (values[index] >= 0.5) {
            products.push([index, values[index]]);
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
    // console.log("Values", values);
    values.sort((a, b) => b[1] - a[1]);
    const a = values.slice(0, 3);
    return a;
    // for the duplicate percentages I get 
    // for (let index = 0; index < allPercentages.length; index++) {
    //     if (allPercentages[index] === a[2]) {
    //         duplicateArr.push(index);
    //     }
    // }
    // // console.log("Duplicate Array", duplicateArr)
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

let groups = ['Caregiver', 'Ruler', 'Creator', 'Lover', 'Outlaw', 'Everyman', 'Hero', 'Innocent', 'Jester', 'Sage', 'Magician', 'Explorer']
let standings = [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11],
    [12, 13],
    [14, 15],
    [16, 17],
    [18, 19],
    [20, 21],
    [22, 23]
]

function getGroupOrder(cutOff) {

    let groupOrder = []
    for (let index = 0; index < groups.length; index++) {
        for (let x = 0; x < cutOff.length; x++) {
            if (standings[index].includes(cutOff[x][0])) {
                groupOrder.push([groups[index], cutOff[x][1]]);
            }
        }
    }
    groupOrder.sort((a, b) => b[1] - a[1]);
    return groupOrder;
}

function getRefinedGroups(groups) {
    let refinedGroups = []
    for (let index = 0; index < groups.length; index++) {
        if (!refinedGroups.includes(groups[index][0])) {
            refinedGroups.push(groups[index][0]);
        }
    }
    return refinedGroups;
}

function master(answers) {
    const testAnswers = makeNestedArr(answers);
    // console.log("testAnswers", testAnswers);
    const percentageArr = calculateResults(testAnswers);
    // console.log("Percentages Array", percentageArr);
    const maxValues = getMaxValues(percentageArr);
    // console.log("Max Values", maxValues);
    const productValues = calculatePercentages(percentageArr, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    // console.log("Products Array", productValues);
    const cutOff = findCutOff(productValues);
    // console.log("Cut Off", cutOff);
    // console.log("Cutoffs Array", cutOff);
    const groups = getGroupOrder(cutOff);
    // console.log(groups)
    const refinedGroups = getRefinedGroups(groups);
    // console.log(refinedGroups) // this will display products from highest to lowest cutoffs
    return refinedGroups;
}

function showPercentages(answers) {
    // returns the percentage of the top 3 archetypes
    const testAnswers = makeNestedArr(answers);
    // console.log("testAnswers", testAnswers);
    const percentageArr = calculateResults(testAnswers);
    // console.log("Percentages Array", percentageArr);
    const maxValues = getMaxValues(percentageArr);
    // console.log("Max Values", maxValues);
    return maxValues;
}
// master([
//         [6, 6, 3],
//         [5, 4, 2],
//         [1, 1, 4],
//         [6, 5, 5],
//         [3, 5, 1],
//         [1, 4, 1],
//         [0, 3, 0],
//         [1, 1, 2],
//         [4, 1, 0],
//         [6, 6, 5],
//         [4, 1, 1],
//         [5, 4, 1]
//     ])
// // console.log('done')
// showPercentages([
//     5, 4, 1,
//     2, 1, 2,
//     2, 3, 2,
//     3, 6, 6,
//     4, 5, 2,
//     6, 5, 5,
//     1, 2, 5,
//     0, 4, 2,
//     3, 1, 4,
//     4, 1, 2,
//     5, 2, 2,
//     6, 6, 0
// ])

// module.exports = master;
// module.exports = showPercentages;
export default { master, showPercentages };