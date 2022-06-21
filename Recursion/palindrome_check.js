const ip = "MADAM",
  op = true;

// two pointers using recursion
const checkPalindrome = (str, l) => {
  if (l >= parseInt(str.length / 2)) {
    return true;
  } else {
    if (str[l] === str[str.length - 1 - l]) {
      return checkPalindrome(str, l + 1);
    } else {
      return false;
    }
  }
};
console.log(checkPalindrome(ip, 0) === true);
