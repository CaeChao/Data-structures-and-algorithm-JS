import { Node } from './Node';

export default class Stack<Item> {
  private count: number;
  private first: Node<Item>;

  constructor() {
    this.count = 0;
    this.first = null;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  push(ele: Item) {
    const oldFirst = this.first;
    this.first = new Node<Item>(ele, oldFirst);
    this.count++;
    return
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.first.item;
    this.first = this.first.next;
    this.count--;
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
