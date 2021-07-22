function mergeSort(originalArray) {
  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    for (let k = 0; k < left.length + right.length; k++) {
      if (i < left.length && (j === right.length || left[i] < right[j])) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return result;
  }
  // when n <= 1, return the original array, since it is sorted
  function splitMerge(originalArray) {
    if (originalArray.length <= 1) {
      return originalArray;
    }
    // Split array on two halves.
    const middle = Math.floor(originalArray.length / 2);
    const leftArray = originalArray.slice(0, middle);
    const rightArray = originalArray.slice(middle, originalArray.length);

    // Sort two halves of split array
    const leftSortedArray = splitMerge(leftArray);
    const rightSortedArray = splitMerge(rightArray);

    // Merge two sorted arrays into one.
    return merge(leftSortedArray, rightSortedArray);
  }
  return splitMerge(originalArray);
}


const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];

console.log(mergeSort(notSortedArr));
