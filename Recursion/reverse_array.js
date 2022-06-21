const ip = [11, 14, 21, 1000, 90],
  op = [90, 10000, 21, 14, 11];

//Method 1 - two pointers using 2 variables
const swap = (arr, l, r) => {
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
};
const reverseArray1 = (arr, l, r) => {
  if (l >= r) {
    return arr;
  } else {
    swap(arr, l, r);
  }
  return reverseArray1(arr, l + 1, r - 1);
};

console.log(reverseArray1(ip, 0, ip.length - 1));

//Method 2 - two pointers using 1 variable
const reverseArray2 = (arr, l) => {
  if (l >= parseInt(arr.length / 2)) {
    return arr;
  } else {
    swap(arr[l], arr[arr.length - 1 - l]);
  }
  return reverseArray2(arr, l + 1);
};
console.log(reverseArray2(ip, 0));
