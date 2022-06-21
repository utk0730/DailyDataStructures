// factorial series :  0 1 1 2 3 5 8 13 21 34
const ip = 4,
  op = 3;

const nthFactorial = (n) => {
  if (n <= 1) return n;
  const res = nthFactorial(n - 1) + nthFactorial(n - 2);
  return res;
};
console.log(nthFactorial(0) === 0);
console.log(nthFactorial(1) === 1);
console.log(nthFactorial(2) === 1);
console.log(nthFactorial(3) === 2);
console.log(nthFactorial(4) === 3);
console.log(nthFactorial(5) === 5);
