// Number Of Ways To Make Change
// Given an array of positive integers representing coin denominations and a single non-negative
// integer representing a target amount of money, implement a function that returns the number of
// ways to make change for that target amount using the given coin denominations. Note that an
// unlimited amount of coins is at your disposal.
// Sample input: 6, [1, 5]
// Sample output: 2 (1x1 + 1x5 and 6x1)

const noofdenom = (arr, targetSum) => {
  for (let i = 0; i < targetSum; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j == 0) {
        arr[j] = 1;
      } else if (arr[j] <= i) {
        arr[j] = arr[j] + arr[j - i];
      }
    }
  }
  return arr;
};
console.log(noofdenom([1, 5], 6));
