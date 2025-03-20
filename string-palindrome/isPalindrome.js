// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Function to check if a string is a palindrome.
let isPalindrome = (s) => {
    let stringLength = s.length;
    
    // Iterate over the first half of the string
    for (let i=0; i<stringLength/2; i++) {
        
        // If the characters at symmetric
        // positions are not equal
        if (s[i] != s[stringLength - i - 1]) {
            // Return false (not a palindrome)
            return false;
        }
    }
    // If all symmetric characters are equal
    // then it is palindrome
    return true;
}

let s = 'eellee';
console.log(isPalindrome(s));