//Write a function to find the longest word in a sentence.


function findLongestWord(sentence) {
    const words = sentence.split(' ');
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}

// Example
console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));  // Output: "jumps"