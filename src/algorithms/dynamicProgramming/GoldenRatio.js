function goldenRatio(f, t) {
  // store the fibonacci numbers in a memory dict
  let memo = [0, 1];

  // iterate n to approach the golden ratio to the precision t
  let n = 1;
  while (n) {
    if (Math.abs(f(n + 2, memo) / f(n + 1, memo) - f(n + 1, memo) / f(n, memo)) < t) {
      console.log(n);
      return f(n + 1, memo) / f(n, memo);
    }
    n++;
  }
}

function fi(n, memo) {
  // pass the fibonacci memo to the function or init the memo
  memo = memo || [0, 1];

  if (n < 1) return 0;
  if (memo[n]) {
    return memo[n];
  }
  // calculate the Fibonacci number recursively
  else {
    return (memo[n] = fi(n - 1, memo) + fi(n - 2, memo));
  }
}

console.log(goldenRatio(fi, 1e-6));
console.log(goldenRatio(fi, 1e-8));
console.log(goldenRatio(fi, 1e-12));
console.log(goldenRatio(fi, 1e-16));
