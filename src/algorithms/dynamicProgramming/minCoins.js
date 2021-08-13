function minCoins(coins, amount) {
  const minCoins = [];

  const findMinCoins = (value) => {
    if (value < 0) {
      return -1;
    }
    if (value === 0) {
      return 0
    }
    if (minCoins[value]) {
      return minCoins[value];
    }
    let min = 0;
    let newMin;
    let newAmount;
    // loop through all coins 
    for (let i = 0; i < coins.length; i++) {
      newAmount = value - coins[i];
      if (newAmount >= 0) {
        newMin = findMinCoins(newAmount);
      }
      if (
        newAmount >= 0
        && (newMin < min - 1 || !min)
        && (newMin || !newAmount)
      ) {
        min = newMin + 1;
      }
    }
    return (minCoins[value] = min);
  };
  return findMinCoins(amount);
}

const coins = [1, 2, 5];
const amount = 10;

console.log(minCoins(coins, amount))
