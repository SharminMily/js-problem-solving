//Write a function to capitalize the first letter of each word in a string.

function capitalizeWords(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

// Example
console.log(capitalizeWords("hello world")); // Output: "Hello World"