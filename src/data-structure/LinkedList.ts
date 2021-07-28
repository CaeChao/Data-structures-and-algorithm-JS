import { IEqualsFunction, defaultEquals } from "../utils";
import { Node } from './Node';

export default class LinkedList<Item> {
  protected count = 0;
  protected first: Node<Item> | undefined;
  protected last: Node<Item> | undefined;

  constructor(protected equalsFn: IEqualsFunction<Item> = defaultEquals) {
    this.equalsFn = equalsFn;
  }

  push(item: Item) {
    const node = new Node(item);

    if (this.first == null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.count++;
  }

  getElementAt(index: number) {
    if (index >= 0 && index <= this.size()) {
      let node = this.first;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    } else {
      throw new Error("Index out of bounds");
    }
  }

  setElementAt(index: number, item: Item) {
    if (index < 0 || index >= this.size()) throw new Error("Index out of bounds");
    if (item == null) throw new Error("Null Pointer");
    let node = this.first;
    for (let i = 0; i < index && node != null; i++) {
      node = node.next;
    }
    node.item = item;
  }

  insert(item: Item, index: number) {
    if (item == null) throw new Error("Null Pointer");
    if (index >= 0 && index <= this.size()) {
      const node = new Node(item);

      if (index === 0) {
        const curr = this.first;
        node.next = curr;
        this.first = node;
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    } else {
      throw new Error("Index out of bounds");
    }
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

  getTail() {
    return this.last;
  }

  clear() {
    this.first = undefined;
    this.last = undefined;
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

