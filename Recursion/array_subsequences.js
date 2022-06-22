const ipArr = [4, 10, 2],
  op = [[], [4], [10], [2], [4, 10], [10, 2], [4, 2]];
const n = ipArr.length;
const result = [];
const initArr = [];

const findAllSubsequences = (idx, resArr) => {
  if (idx >= n) {
    console.log("subsequences ->", resArr);
    return;
  }
  resArr.push(ipArr[idx]);
  findAllSubsequences(idx + 1, resArr);

  resArr.pop();
  findAllSubsequences(idx + 1, resArr);
};
findAllSubsequences(0, initArr);
