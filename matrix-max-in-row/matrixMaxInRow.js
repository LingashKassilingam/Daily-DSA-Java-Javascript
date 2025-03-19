// Javascript program to find maximum element of each row in a matrix
function maxElement(matrix) {
    let resultArray = [];

    // Traverse through each row and find the
    // max in each row
    for (let row of matrix) {
        let maxVal = Math.max(...row);
        resultArray.push(maxVal);
    }

    return resultArray;
}

let matrix = [
    [4, 43, 1, 10],
    [1, 4, 12, 9],
    [75, 38, 28, 2],
    [3, 2, 6, 7]
];
const resultArray = maxElement(matrix);

for (let result of resultArray) {
    console.log(result);
}
