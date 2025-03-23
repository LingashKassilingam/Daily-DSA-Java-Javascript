function nthFibonacci(n) {
    if (n <= 1) { 
        return n;
    }

    // To store the curr Fibonacci number
    let curr = 0;

    // To store the previous Fibonacci numbers
    let prev1 = 1;
    let prev2 = 0;

    // Loop to calculate Fibonacci numbers from 2 to n
    for (let i = 2; i <= n; i++) {
    
        // Calculate the curr Fibonacci number
        curr = prev1 + prev2;

        // Update prev2 to the last Fibonacci number
        prev2 = prev1;

        // Update prev1 to the curr Fibonacci number
        prev1 = curr;
    }
    return curr;
}

let n = 5;
let result = nthFibonacci(n);
console.log(result);
