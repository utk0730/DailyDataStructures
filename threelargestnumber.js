// Write a function that takes in an array of integers and returns a sorted array of the three largest
// integers in the input array. Note that the function should return duplicate integers if necessary; for
// example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].

// Sample input: [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
// Sample output: [18, 141, 541]

/********** Solution 1 - start *************/
//time complexity - O(nlog(n))
//space complexity - O(1)
const threelargestnum1 = arr =>
  Array.from(new Set(arr.sort((a, b) => b - a))).slice(0, 3);
/********** Solution 1 - end *************/

/********** Solution 2 - start *************/
//time complexity - O(n)
//space complexity - O(1)
const swapandupdate = (arr, res, idx) => {
  for (let i = 0; i < res.length; i++) {
    if (i == idx) res[i] = arr[i];
    else {
      res[i + 1] = res[i];
    }
  }
  console.log(res);
};
const threelargestnum2 = arr => {
  const res = [null, null, null];
  for (let i = 1; i < arr.length; i++) {
    if (!res[0] && arr[i] > res[0]) swapandupdate(arr, res, 0);
    else if (!res[1] && arr[i] > res[1]) swapandupdate(arr, res, 1);
    else if (!res[2] && arr[i] > res[2]) swapandupdate(arr, res, 1);
  }

  return res;
};

/********** Solution 2 - end *************/

//inputs
let narr = [141, 150, 170];
const arr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
console.log(threelargestnum1(arr));
