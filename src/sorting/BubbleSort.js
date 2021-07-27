import { defaultCompare, swap } from '../utils.js';
import _ from 'lodash';

export function bubbleSort(originalArr, compareFn = defaultCompare) {
  // clone original Array
  const array = [...originalArr];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === 1) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];

console.log(bubbleSort(notSortedArr));
console.log(_.isEqual(bubbleSort(notSortedArr), sortedArr));
