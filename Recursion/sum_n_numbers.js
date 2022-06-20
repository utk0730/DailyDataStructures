const ip = 10,
  op = 55;

// parameterised function call
const sumType1 = (num, currentSum) => {
  if (num <= 0) {
    return currentSum;
  }
  return sumType1(num - 1, num + currentSum);
};

console.log(sumType1(ip, 0) === op); // true

// Functional recursion
const sumType2 = (num) => {
  if (num === 0) {
    return 0;
  }
  return num + sumType2(num - 1);
};

console.log(sumType2(ip) === op); // true
