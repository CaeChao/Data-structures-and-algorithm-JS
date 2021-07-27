const permutation = (input) => {
  const result = [];
  function permute(arr, memo = []) {
    if (arr.length < 1) {
      result.push(memo);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = [...arr];
        const next = curr.splice(i, 1);
        permute([...curr], memo.concat(next));
      }
    }
  }
  permute(input.split(''));
  return result;
};

console.log(permutation('abc'));
