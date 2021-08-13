import { defaultCompare, ICompareFunction, swap, reverseCompare } from '../utils';

export class MinHeap<T> {
  protected heap: T[];

  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
    this.heap = [];
    this.compareFn = compareFn;
  }

  private getLeftIndex(index: number) {
    return 2 * index + 1;
  }

  private getRightIndex(index: number) {
    return 2 * index + 2;
  }

  private getParentIndex(index: number) {
    if (index === 0) {
      return undefined;
    }
    return Math.floor(index / 2) - 1;
  }

  private siftDown(index: number) {
    let key = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();

    if (left < size && this.compareFn(this.heap[key], this.heap[left]) === 1) {
      key = left;
    };
    if (right < size && this.compareFn(this.heap[key], this.heap[right]) === 1) {
      key = right
    }

    if (key !== index) {
      swap(this.heap, key, index);
      this.siftDown(key);
    }
  }

  private siftUp(index: number) {
    let parent = this.getParentIndex(index);

    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === 1) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }
 
  size() {
    return this.heap.length;
  } 

  isEmpty() {
    return this.size() <= 0;
  }

  clear() {
    this.heap = [];
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  insert(value: T) {
    if (value != null) {
      const index = this.heap.length;
      this.heap.push(value);
      this.siftUp(index);
      return true;
    }
    return false;
  }

  extract() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return removedValue;
  }

  heapify(array: T[]) {
    if (array) {
      this.heap = array;
    }

    const maxIndex = Math.floor(this.size() / 2) - 1;

    for (let i = 0; i <= maxIndex; i++) {
      this.siftDown(i);
    }

    return this.heap;
  }
}


export class MaxHeap<T> extends MinHeap<T> {
  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn);
  }
}
