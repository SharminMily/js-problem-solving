//
//Remove duplicate values from an array.


function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example
console.log(removeDuplicates([1, 2, 3, 2, 1, 4])); // Output: [1, 2, 3, 4]