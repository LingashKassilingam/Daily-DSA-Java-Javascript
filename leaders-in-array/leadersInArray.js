// Function to find the leaders in an array
function leadersInArray(arr) {
    let result = [];
    arrLength = arr.length;
    
    for (let i=0; i<arrLength; i++) {
        let j;
        // Check elements to the right
        for(j=i+1; j<arrLength; j++) {
            // If a larger element is found
            if(arr[i] < arr[j]) {
                break;
            }
        }
        
        // If no larger element was found
        if(j===arrLength) {
            result.push(arr[i])
        }
    }
    
    return result;
}

let arr = [ 16, 17, 4, 3, 5, 2 ];
let resultArray = leadersInArray(arr);
console.log(resultArray.join(" "));