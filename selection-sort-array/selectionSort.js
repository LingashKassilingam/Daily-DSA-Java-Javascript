function selectionSort(arr) {
    let arrayLength = arr.length;
    for (let i = 0; i < arrayLength - 1; i++) {
        // Assume the current position holds
        // the minimum element
        let min_idx = i;
        // Iterate through the unsorted portion
        // to find the actual minimum
        for (let j = i + 1; j < arrayLength; j++) {
            if (arr[j] < arr[min_idx]) {
                // Update min_idx if a smaller element is found
                min_idx = j;
            }
        }
        // Move minimum element to its
        // correct position
        let value = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = value;
    }
}

let arr = [64, 25, 12, 22, 11];

console.log("Original array: ", arr);

selectionSort(arr);

console.log("Sorted array: ", arr);
