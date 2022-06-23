const ipArr = [2, 3, 6, 7],
  targetSum = 7,
  op = [[2, 2, 3], [7]];
const initResArr = [];
const findSequences = (idx, resArr, targetSum) => {
  if (idx >= ipArr.length) {
    if (targetSum === 0) {
      console.log("result sequences --->", resArr);
    }
    return;
  }

  if (ipArr[idx] <= targetSum) {
    resArr.push(ipArr[idx]);
    findSequences(idx, resArr, targetSum - ipArr[idx]);
    resArr.pop();
  }

  findSequences(idx + 1, resArr, targetSum);
};

findSequences(0, initResArr, targetSum);
