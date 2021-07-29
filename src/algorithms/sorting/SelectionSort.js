import { defaultCompare, swap } from '../utils.js';
import _ from 'lodash';

export function selectionSort(originalArray, compareFn = defaultCompare) {
  // clone original Array
  const array = [...originalArray];

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (compareFn(array[j], array[minIndex]) === -1) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(array, i, minIndex);
    }
  }

  return array;
}

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];

console.log(selectionSort(notSortedArr));
console.log(_.isEqual(selectionSort(notSortedArr), sortedArr));
