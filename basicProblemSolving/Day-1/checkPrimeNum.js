//Write a function to check if a number is prime.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false