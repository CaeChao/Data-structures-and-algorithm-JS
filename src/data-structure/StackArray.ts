export default class StackArray<Item> {
  private items: Item[];
  
  constructor() {
    this.items = [];
  }
  push(ele: Item) {
    this.items.push(ele);
  }

  pop() {
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  toArray() {
    return this.items;
  }

  toString() {
    return this.items.toString();
  }
}
