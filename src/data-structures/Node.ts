export class Node<T> {
  constructor(public item: T, public next?: Node<T>) {
    this.item = item;
    this.next = next;
  }
}

export class DoublyNode<T> extends Node<T> {
  public item: T;
  public next?: DoublyNode<T>;
  public prev?: DoublyNode<T>;
  constructor(item: T, next?: DoublyNode<T>, prev?: DoublyNode<T>) {
    super(item, next);
    this.prev = prev;
  }
}

export class TreeNode<K> {
  public left: TreeNode<K>;
  public right: TreeNode<K>;

  constructor(public key: K) {
    this.key = key;
  }

  toString() {
    return `${this.key}`;
  }

}
