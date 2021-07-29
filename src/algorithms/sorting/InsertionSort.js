import { defaultCompare, swap } from '../utils.js';
import _ from 'lodash';

export function insertionSort(originalArray, compareFn = defaultCompare) {
  // clone original Array
  const array = [...originalArray];

  for (let i = 1; i < array.length; i++) {
    let j = i;
    let tmp = array[i];
    while (j > 0 && compareFn(array[j - 1], tmp) === 1) {
      swap(array, j, j - 1);
      j--;
    }
  }
  return array;
}
const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];

console.log(insertionSort(notSortedArr));
console.log(_.isEqual(insertionSort(notSortedArr), sortedArr));
