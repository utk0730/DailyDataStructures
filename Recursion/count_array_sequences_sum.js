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
      return 1;
    }
    return 0;
  }
  resArr.push(ipArr[idx]);
  currentSum = currentSum + ipArr[idx];
  const left = findAllSubsequences(idx + 1, resArr, currentSum);

  const deletdItem = resArr.pop();
  currentSum = currentSum - deletdItem;
  const right = findAllSubsequences(idx + 1, resArr, currentSum);
  return left + right;
};
console.log(findAllSubsequences(0, initArr, currentSum));
