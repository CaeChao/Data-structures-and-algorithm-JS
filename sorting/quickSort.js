import { defaultCompare, swap } from '../utils.js';
import _ from 'lodash';

export function quickSort(originalArray, compareFn = defaultCompare) {
  function partition(array, left, right, compareFn) {
    const middle = array[Math.floor((right + left) / 2)];

    let i = left;
    let j = right;
    while (i <= j) {
      while (compareFn(array[i], middle) === -1) {
        i++;
      }
      while (compareFn(array[j], middle) === 1) {
        j--;
      }
      if (i <= j) {
        swap(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  function sort(array, left, right, compareFn) {
    if (array.length > 1) {
      let index = partition(array, left, right, compareFn);
      if (left < index - 1) {
        sort(array, left, index - 1, compareFn);
      }
      if (index < right) {
        sort(array, index, right, compareFn);
      }
    }
    return array;
  }

  // clone original Array
  const result = [...originalArray];
  return sort(result, 0, originalArray.length - 1, compareFn);
}

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];

console.log(quickSort(notSortedArr));
console.log(_.isEqual(quickSort(notSortedArr), sortedArr));
