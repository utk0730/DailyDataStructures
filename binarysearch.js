// Write a function that takes in a sorted array of integers as well as a target integer. The function
// should use the Binary Search algorithm to nd if the target number is contained in the array and
// should return its index if it is, otherwise -1.
// Sample input: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33
// Sample output: 3

const bsrch = (arr, key) => {
  let begin = 0;
  let end = arr.length - 1;
  while (begin <= end) {
    let mid = parseInt((begin + end) / 2);
    if (key === arr[mid]) return mid;
    else if (key > arr[mid]) begin = mid + 1;
    else end = mid - 1;
  }
  return -1;
};
console.log(bsrch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73));
