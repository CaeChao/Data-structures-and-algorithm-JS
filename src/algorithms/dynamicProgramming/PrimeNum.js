function primeNum(num) {
  if (num < 2) return 2;
  if (num === 2) return 3;
  // calculate the range of prime Numbers
  let range = parseInt(num * (Math.log(num) + Math.log(Math.log(num)))) + 3;

  // Create a boolean array and init all entries to true
  let isPrime = Array.from(Array(range).keys(), (x) => true);
  let primes = [];

  // change the number that is not prime to false
  isPrime.forEach((x, n) => {
    if (isPrime[n] === true) {
      for (let i = 2; i * (n + 2) <= range; i++) {
        isPrime[i * (n + 2) - 2] = false;
      }
    }
  });

  // store all prime numbers
  isPrime.forEach((x, n) => {
    if (x === true) {
      primes.push(n + 2);
    }
  });
  return primes[num - 1];
}

console.log(primeNum(10001));
