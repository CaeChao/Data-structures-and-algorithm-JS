import { IEqualsFunction, defaultEquals } from "../utils";
import { Node } from './Node';

export default class LinkedList<Item> {
  private count = 0;
  private first: Node<Item> | undefined;

  constructor(public equalsFn: IEqualsFunction<Item> = defaultEquals) {
    this.equalsFn = equalsFn;
  }

  push(item: Item) {
    const node = new Node(item);
    let curr;

    if (this.first == null) {
      this.first = node;
    } else {
      curr = this.first;

      while (curr.next != null) {
        curr = curr.next;
      }

      curr.next = node;
    }
    this.count++;
  }

  getElementAt(index: number) {
    if (index >= 0 && index <= this.count) {
      let node = this.first;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(ele: Item, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(ele);

      if (index === 0) {
        const curr = this.first;
        node.next = curr;
        this.first = node;
      } else {
        const prev = this.getElementAt(index - 1);
        node.next = prev.next;
        prev.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let curr = this.first;

      if (index === 0) {
        this.first = curr.next;
      } else {
        const previous = this.getElementAt(index - 1);
        curr = previous.next;
        previous.next = curr.next;
      }
      this.count--;
      return curr.item;
    }
    return undefined;
  }

  remove(item: Item) {
    const index = this.indexOf(item);
    return this.removeAt(index);
  }

  indexOf(item: Item) {
    let curr = this.first;

    for (let i = 0; i < this.size() && curr != null; i++) {
      if (this.equalsFn(item, curr.item)) {
        return i;
      }
      curr = curr.next;
    }

    return -1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.first;
  }

  clear() {
    this.first = undefined;
    this.count = 0;
  }

  toString() {
    if (this.first == null) {
      return '';
    }
    let objString = `${this.first.item}`;
    let curr = this.first.next;
    for (let i = 1; i < this.size() && curr != null; i++) {
      objString = `${objString},${curr.item}`;
      curr = curr.next;
    }
    return objString;
  }
}

