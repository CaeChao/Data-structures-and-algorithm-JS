function palindrome(str) {
  let pure = str.match(/[a-z0-9]/gi);
  let origin = pure.join('').toLowerCase();
  let reverse = pure.reverse().join('').toLowerCase();
  return origin === reverse;
}
