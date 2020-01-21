// Maximum Subset Sum With No Adjacent Elements
// Write a function that takes in an array of positive integers and returns an integer representing the
// maximum sum of non-adjacent elements in the array. If a sum cannot be generated, the function
// should return 0.
// Sample input: [75, 105, 120, 75, 90, 135]
// Sample output: 330 (75, 120, 135)

// Time complexity - O(n)
// Space complexity - O(n)

//Dynamic problem set
const maxsubsetsum = arr => {
  maxSum = [arr[0], Math.max(arr[0], arr[1])]; // assuming array is of length >=2
  for (let i = 2; i < arr.length; i++) {
    maxSum[i] = Math.max(maxSum[i - 1], maxSum[i - 2] + arr[i]);
  }
  return maxSum[maxSum.length - 1];
};
console.log(maxsubsetsum([75, 105, 120, 75, 90, 135]));
