//Write a function to count the number of vowels in a string.

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    return str.split('').filter(char => vowels.includes(char)).length;
}

// Example
console.log(countVowels("hello world")); // Output: 3