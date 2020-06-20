function checkCashRegister(price, cash, cid) {
  let amount = [
  ['ONE HUNDRED', 100.00],
  ['TWENTY', 20.00],
  ['TEN', 10.00],
  ['FIVE', 5.00],
  ['ONE', 1.00],
  ['QUARTER', 0.25],
  ['DIME', 0.10],
  ['NICKEL', 0.05],
  ['PENNY', 0.01]
];
  let changeNum = cash - price;

  let result = {status: 'INSUFFICIENT_FUNDS',
  change: []};
  //Transform the CID Array into drawer Object
  let register = cid.reduce( (acc, curr) => {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc }, { total: 0 }
  );


    // Exact change
  if (register.total === changeNum) {
    result.status = 'CLOSED';
    result.change = cid;
    return result;
  }

  // Obvious insufficient funds
  if (register.total < changeNum) {
    return result;
  }

  let changeArr = amount.reduce( (acc, curr) => {
    let value = 0;
    while (changeNum >= curr[1] && register[curr[0]] > 0){
      changeNum -= curr[1];
      register[curr[0]] -= curr[1];
      value += curr[1];
      changeNum = Math.round(changeNum * 100) / 100;
    }
    if (value > 0) {
      acc.push([ curr[0], value ]);
    }
    return acc;
  }, [])

  if (changeNum > 0 || changeArr.length < 1) {
     return result;
  }
  // Here is your change
  result.status = 'OPEN';
  result.change = changeArr;
  return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
