//Determine if a string is a palindrome (reads the same backward as forward).


function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Example
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false