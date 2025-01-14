//Write a function to find the missing number in an array of 1 to n.


function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Example
console.log(findMissingNumber([1, 2, 4, 5], 5)); // Output: 3