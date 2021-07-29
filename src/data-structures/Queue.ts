import { Node } from './Node';
export default class Queue<Item> {
  private first: Node<Item>;
  private last: Node<Item>;
  private count: number;

  constructor() {
    this.count = 0;
    this.first = null;
    this.last = null;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  enqueue(item: Item) {
    const oldLast = this.last;
    this.last = new Node<Item>(item);
    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      oldLast.next = this.last;
    }
    this.count++;
    return;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.first.item;
    this.first = this.first.next;
    this.count--;
    if (this.isEmpty()) this.last = null;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.first.item;
  }

  clear() {
    this.first = null;
    this.last = null;
    this.count = 0;
  }

  
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.first.item}`;
    let curr = this.first.next;
    while (curr != null) {
      objString = `${objString},${curr.item}`;
      curr = curr.next;
    }
    return objString;
  }

}
