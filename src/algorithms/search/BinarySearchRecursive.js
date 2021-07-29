import { defaultCompare } from '../utils';
import { quickSort } from '../sorting/QuickSort';

function binarySearchRecursive(array, value, left, right, compareFn = defaultCompare) {
  if (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const item = array[mid];
    if (compareFn(item, value) === -1) {
      return binarySearchRecursive(array, value, mid + 1, right, compareFn);
    } else if (compareFn(item, value) === 1) {
      return binarySearchRecursive(array, value, left, mid - 1, compareFn);
    } else {
      return mid;
    }
  }
  return -1;
}
export function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array);
  let left = 0;
  let right = sortedArray.length - 1;
  return binarySearchRecursive(sortedArray, value, left, right, compareFn);
}
