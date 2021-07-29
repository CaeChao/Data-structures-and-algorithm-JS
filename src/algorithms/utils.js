export function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

export function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
}

export function defaultEquals(a, b) {
  return a === b;
}


