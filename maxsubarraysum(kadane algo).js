// Write a function that takes in a non-empty array of integers and returns the maximum sum that can
// be obtained by summing up all the numbers in a non-empty subarray of the input array. A subarray
// must only contain adjacent numbers.
// Sample input: [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
// Sample output: 19 ([1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1])

//  kadane's algorithm  -(Dynamic programming)
//time complexity : O(n)
//space complexity : O(1)
const maxsubarraysum = arr => {
  let maxSumEndingHere = arr[0],
    maxSoFar = arr[0];
  let startIndex, endIndex;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxSumEndingHere + arr[i]) startIndex = i; // to get initial index of subarray
    maxSumEndingHere = Math.max(arr[i], maxSumEndingHere + arr[i]);

    if (maxSumEndingHere > maxSoFar) endIndex = i; // to get end index of subarray
    maxSoFar = Math.max(maxSoFar, maxSumEndingHere);
  }
  return [maxSumEndingHere, startIndex, endIndex];
};

//inputs
const arr = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
console.log(maxsubarraysum(arr));
