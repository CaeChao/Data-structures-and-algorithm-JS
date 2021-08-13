import { defaultCompare, ICompareFunction } from '../utils';

export default class PriorityQueueArray<T> {
  private items: T[];

  constructor(
    private compareFn: ICompareFunction<T> = defaultCompare,
  ) {
    this.items = [];
    this.compareFn = compareFn;
  }

  enqueue(item: T) {
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.compareFn(item, this.items[i]) === -1) {
        this.items.splice(i, 0, item);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(item);
    }
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    else {
      return this.items.toString();
    }
  }

}

