// Write a function that takes in a non-empty array of distinct integers and an integer representing a
// target sum. If any two numbers in the input array sum up to the target sum, the function should
// return them in an array. If no two numbers sum up to the target sum, the function should return an
// empty array. Assume that there will be at most one pair of numbers summing up to the target sum.

// Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
// Sample output: [-1, 11]

console.log('starting.....');

/************solutin-1-start***********************/
// time complexity - O(n)
// space complexity - O(n)
const twonumsum1 = (arr, targetSum) => {
  const resArr = [];
  const numCount = {};
  for (let i = 0; i < arr.length; i++) {
    const secondNum = targetSum - arr[i];
    numCount[secondNum]
      ? resArr.push([arr[i], secondNum])
      : (numCount[arr[i]] = true);
  }
  return resArr;
};
/************solutin-1 - end***********************/

/************solutin-2-start***********************/
// time complexity -O(n^2)
// space complexity - O(1)
const twonumsum2 = (arr, targetSum) => {
  const resArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) resArr.push([arr[i], arr[j]]);
    }
  }
  return resArr;
};
/************solutin-2-end***********************/

/************solutin-3-start***********************/
// time complexity -O(nlog(n))
// space complexity - O(1)
const twonumsum3 = (arr, targetSum) => {
  const resArr = [];
  const sortedArr = arr.sort((a, b) => a - b); // [ -4, -1, 1, 3 , 5, 6, 8, 11]
  let begin = 0,
    end = sortedArr.length - 1;
  while (begin < end) {
    const calcSum = sortedArr[begin] + sortedArr[end];
    if (calcSum < targetSum) begin++;
    else if (calcSum > targetSum) end--;
    else {
      resArr.push([sortedArr[begin], sortedArr[end]]);
      begin++;
      end--;
    }
  }
  return resArr;
};
/************solutin-3-end***********************/

//inputs
const arr = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

console.log(twonumsum1(arr, target));
console.log(twonumsum2(arr, target));
console.log(twonumsum3(arr, target));

console.log('end.....');
