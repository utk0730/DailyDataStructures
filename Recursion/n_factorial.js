const ip = 3,
  op = 6;
const ip2 = 5,
  op2 = 120;

// Method 1
const nFactorailMethod1 = (n, res) => {
  if (n === 0) {
    return res;
  }
  return nFactorailMethod1(n - 1, n * res);
};
console.log(nFactorailMethod1(ip, 1) === op);

// Method 2
const nFactorailMethod2 = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * nFactorailMethod2(n - 1);
};
console.log(nFactorailMethod1(ip, 1) === op);
