const ipArr = [4, 10, 2, 6],
  op = [[], [4], [10], [2], [4, 10], [10, 2], [4, 2]];
const n = ipArr.length;
const result = [];
const initArr = [];
let currentSum = 0;
const requiredSum = 6;

const findAllSubsequences = (idx, resArr, currentSum) => {
  if (idx >= n) {
    if (currentSum === requiredSum) {
      console.log("sum subsequence --->", resArr);
    }
    return;
  }
  resArr.push(ipArr[idx]);
  currentSum = currentSum + ipArr[idx];
  findAllSubsequences(idx + 1, resArr, currentSum);

  const deletdItem = resArr.pop();
  currentSum = currentSum - deletdItem;
  findAllSubsequences(idx + 1, resArr, currentSum);
};
findAllSubsequences(0, initArr, currentSum);
