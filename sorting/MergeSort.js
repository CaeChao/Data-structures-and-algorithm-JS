import { defaultCompare } from '../utils.js';
import _ from 'lodash';

export function mergeSort(originalArray, compareFn = defaultCompare) {
  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (compareFn(left[i], right[j]) === -1) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
  }
  // when n <= 1, return the original array, since it is sorted
  function splitMerge(array) {
    if (array.length <= 1) {
      return array;
    }
    // Split array on two halves.
    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle, originalArray.length);

    // Sort two halves of split array
    const leftSortedArray = splitMerge(leftArray);
    const rightSortedArray = splitMerge(rightArray);

    // Merge two sorted arrays into one.
    return merge(leftSortedArray, rightSortedArray);
  }
  return splitMerge(originalArray);
}

const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(mergeSort(notSortedArr));
console.log(_.isEqual(mergeSort(notSortedArr), sortedArr));
