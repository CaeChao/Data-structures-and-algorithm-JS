import { defaultCompare, ICompareFunction } from '../utils';
import { TreeNode } from './Node';

export default class BinarySearchTree<T>  {
  protected root: TreeNode<T>;

  constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {}

  insert(key: T) {
    if (this.root == null) {
      this.root = new TreeNode<T>(key);
    } else {
      this.insertNode(this.root, key);
    }
  };

  protected insertNode(node: TreeNode<T>, key: T) {
    if (this.compareFn(key, node.key) === -1) {
      if (node.left == null) {
        node.left = new TreeNode(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new TreeNode(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  getRoot() {
    return this.root;
  }

  search(key: T) {
    return this.searchNode(this.root, key);
  }

  private searchNode(node: TreeNode<T>, key: T): boolean {
    if (node == null) {
      return false;
    }

    if (this.compareFn(key, node.key) === -1) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === 1) {
      return this.searchNode(node.right, key);
    }
    // key is equal to node.item
    return true;
  }

  inOrderTraverse(callback: Function) {
    this.inOrderTraverseNode(this.root, callback);
  }

  private inOrderTraverseNode(node: TreeNode<T>, callback: Function) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback: Function) {
    this.preOrderTraverseNode(this.root, callback);
  }

  private preOrderTraverseNode(node: TreeNode<T>, callback: Function) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback: Function) {
    this.postOrderTraverseNode(this.root, callback);
  }

  private postOrderTraverseNode(node: TreeNode<T>, callback: Function) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
  min() {
    return this.minNode(this.root);
  }

  protected minNode(node: TreeNode<T>) {
    let curr = node;
    while (curr != null && curr.left != null) {
      curr = curr.left;
    }
    return curr
  }

  max() {
    return this.maxNode(this.root);
  }

  protected maxNode(node: TreeNode<T>) {
    let curr = node;
    while (curr != null && curr.right != null) {
      curr = curr.right;
    }
    return curr
  }
}
