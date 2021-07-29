import { defaultCompare } from '../utils';
import { quickSort } from '../sorting/QuickSort';

export function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array);
  let left = 0;
  let right = sortedArray.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const item = sortedArray[mid];
    if (compareFn(item, value) === -1) {
      left = mid + 1;
    } else if (compareFn(item, value) === 1) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
