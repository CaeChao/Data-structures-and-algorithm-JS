function alternatingSort(a) {
  let i = 0;
  let j = a.length - 1;
  let b = [];
  for (let e = 0; e <= a.length / 2 + 1; e += 2) {
    b[e] = a[i];
    b[e + 1] = a[j];
    i++;
    j--;
  }
  let sortArr = a.sort((a, b) => a - b);
  console.log(b, sortArr);
  return sortArr.every((x, i) => {
    return x === b[i];
  });
}

alternatingSort([1, 3, 5, 6, 4, 2]);
