function isSubset(arrayOne, arrayTwo) {

    const arrayOneLength = arrayOne.length;
    const arrayTwoLength = arrayTwo.length;
    // Iterate over each element in the second array
    for (let arrTwoIndex = 0; arrTwoIndex < arrayTwoLength; arrTwoIndex++) {
      let found = false;
      
      // Check if the element exists in the first array
      for (let arrayTwoIndex = 0; arrayTwoIndex < arrayOneLength; arrayTwoIndex++) {
        if (arrayTwo[arrTwoIndex] === arrayOne[arrayTwoIndex]) {
          found = true;
          break;
        }
      }
      
      // If any element is not found, return false
      if (!found) {
        return false;
      }
    }
    
    // If all elements are found, return true
    return true;
  }
  
  //Driver Code
  let arrayOne = [11, 1, 13, 21, 3, 7];
  let arrayTwo = [11, 3, 7, 1];
  
  if (isSubset(arrayOne, arrayTwo)) {
    console.log("true");
  } else {
    console.log("false");
  }
  