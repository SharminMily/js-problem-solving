//Write a function to reverse a given string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example
console.log(reverseString("hello")); // Output: "olleh"