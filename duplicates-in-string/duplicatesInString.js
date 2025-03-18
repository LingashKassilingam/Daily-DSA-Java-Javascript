function printDuplicates(sampleString) {
    let stringLength = sampleString.length;

    // Sorting the string
    sampleString = sampleString.split('').sort().join('');

    // Loop through the sorted string to find duplicates
    for (let i = 0; i < stringLength; i++) {
        let count = 1;

        // Counting the occurrences of each character
        while (i < stringLength - 1 && sampleString[i] == sampleString[i + 1]) {
            count++;
            i++;
        }

        // Printing the duplicate character and its count
        if (count > 1) {
            console.log(sampleString[i] + ", count = " + count);
        }
    }
}

let sampleString = "lee spangles";
printDuplicates(sampleString);
