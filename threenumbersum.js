// Write a function that takes in a non-empty array of distinct integers and an integer representing a
// target sum. The function should nd all triplets in the array that sum up to the target sum and
// return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered
// in ascending order, and the triplets themselves should be ordered in ascending order with respect
// to the numbers they hold. If no three numbers sum up to the target sum, the function should return
// an empty array.

// Sample input: [12, 3, 1, 2, -6, 5, -8, 6], 0
// Sample output : [[-8,2,6],[-8,3,5],[-6,1,5]]

/************ solution 1 - start**************/
// time complexity : O(n^2)
// space complexity : O(n)
const threenumbersum1 = (arr, targetSum) => {
  const obj = {},
    res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      let thirdNum = targetSum - (arr[i] + arr[j]);
      obj[thirdNum]
        ? res.push([arr[i], arr[j], thirdNum]) // we need to handle case for duplicate triplets in different order
        : (obj[thirdNum] = true);
    }
  }
  return res;
};

/************ solution 1 - end**************/

/************ solution 2 - start**************/
//time complexity : O(n^2)
//space complexity : O(1)
const threenumbersum2 = (arr, targetSum) => {
  const res = [];
  if (arr.length < 3) return [];
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length - 2; i++) {
    let currentIndex = i,
      first = i + 1,
      last = sortedArr.length - 1;
    while (first < last) {
      let calcSum =
        sortedArr[currentIndex] + sortedArr[first] + sortedArr[last];
      if (calcSum == targetSum) {
        res.push([sortedArr[currentIndex], sortedArr[first], sortedArr[last]]);
        first++;
        last--;
      } else if (calcSum < targetSum) first++;
      else last--;
    }
  }

  return res;
};

/************ solution 2 - end**************/

// inputs
const arr = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;
console.log(threenumbersum1(arr, targetSum));
console.log(threenumbersum2(arr, targetSum));
