import { defaultEquals, IEqualsFunction } from '../utils';
import LinkedList from './LinkedList';
import { DoublyNode } from './Node';

export default class DoublyLinkedList<Item> extends LinkedList<Item> {
  protected first: DoublyNode<Item> | undefined;
  protected last: DoublyNode<Item> | undefined;

  constructor(protected equalsFn: IEqualsFunction<Item> = defaultEquals) {
    super(equalsFn);
  }

  push(item: Item) {
    const node = new DoublyNode(item);
    if (this.first == null) {
      this.first = node;
      this.last = node;
    }
    else {
      this.last.next = node;
      node.prev = this.last;
      this.last = node;
    }
    this.count++;
  }

  insert(item: Item, index: number) {
    if (item == null) throw new Error("Null Pointer");
    if (index >= 0 && index <= this.size()) {
      const node = new DoublyNode(item);
      let curr = this.first;

      if (index === 0) {
        if (this.first == null) {
          this.first = node;
          this.last = node;
        } else {
          this.first.prev = node;
          node.next = this.first;
          this.first = node;
        }
      } else if (index === this.count) {
        curr = this.last;
        curr.next = node;
        node.prev = curr;
        this.last = node;
      } else {
        const previous = this.getElementAt(index - 1);
        curr = previous.next;
        node.next = curr;
        previous.next = node

        curr.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    } else {
      throw new Error("Index out of bounds");
    }
  };

  removeAt(index: number) {
    if (index >= 0 && index < this.size()) {
      let curr = this.first;
      if (index === 0) {
        this.first = this.first.next;
        if (this.size() === 1) {
          this.last = undefined;
        }
        else {
          this.first.prev = undefined;
        }
      } else if (index === this.count - 1) {
        curr = this.last;
        this.last = curr.prev
        this.last.next = undefined;
      } else {
        curr = this.getElementAt(index);
        const previous = curr.prev;
        previous.next = curr.next;
        curr.next.prev = previous;
      }
      this.count--;
      return curr.item;
    }
    return undefined
  };

  indexOf(item: Item) {
    let curr = this.first;
    let index = 0;
    while (curr != null) {
      if (this.equalsFn(item, curr.item)) {
        return index
      }
      index++;
      curr = curr.next;
    }
    return -1;
  };

  getHead() {
    return this.first;
  };

  getTail() {
    return this.last;
  };

  clear() {
    this.first = undefined;
    this.last = undefined;
    this.count = 0;
  }

  reverse() {
    let curr = this.first;
    let temp = null;
    while (curr != null) {
      temp = curr.next;
      curr.next = curr.prev;
      curr.prev = temp;

      if (curr.prev == null) {
        this.first = curr;
      }
      curr = temp;
    }
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

  inverseToString() {
    if (this.last == null) {
      return '';
    }
    let objString = `${this.last.item}`;
    let previous = this.last.prev;
    while (previous != null) {
      objString = `${objString},${previous.item}`;
      previous = previous.prev
    }
    return objString;
  }
}

