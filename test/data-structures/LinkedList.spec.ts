import 'mocha';
import { expect } from 'chai';
import { LinkedList, utils } from '../../src/index';
import TestObj from './testObject';

describe('LinkedList', () => {
  let list: LinkedList<number>;
  let min: number;
  let max: number;

  beforeEach(() => {
    list = new LinkedList<number>(utils.defaultEquals);
    min = 1;
    max = 3;
  });

  function pushesElements() {
    for (let i = min; i <= max; i++) {
      list.push(i);
    }
  }

  function verifyList() {
    let current = list.getHead();
    for (let i = min; i <= max && current; i++) {
      expect(current).to.not.be.an('undefined');
      if (current) {
        // TS strictNullChecks
        expect(current.item).to.not.be.an('undefined');
        expect(current.item).to.equal(i);
        if (i < max) {
          expect(current.next).to.not.be.an('undefined');
          if (current.next) {
            // TS strictNullChecks
            expect(current.next.item).to.equal(i + 1);
          }
        } else {
          expect(current.next).to.be.an('undefined');
        }
        current = current.next;
      }
    }
  }

  it('starts empty', () => {
    expect(list.size()).to.equal(0);
    expect(list.isEmpty()).to.equal(true);
    expect(list.getHead()).to.be.an('undefined');
  });

  it('pushes items', () => {
    pushesElements();
    verifyList();
  });

  it('returns item at specific index: invalid position', () => {
    // list is empty
    try {
      list.getElementAt(3);
    } catch (error) {
      expect(error.message).to.equal('Index out of bounds');
    }
  });

  it('returns item at specific index', () => {
    let node;

    pushesElements();

    for (let i = min; i <= max; i++) {
      node = list.getElementAt(i - 1);
      expect(node).to.not.be.an('undefined');
      if (node) {
        expect(node.item).to.equal(i);
      }
    }
  });

  it('inserts items first position empty list', () => {
    const item = 1;
    max = item;
    expect(list.insert(item, 0)).to.equal(true);
    verifyList();
  });

  it('inserts items first position not empty list', () => {
    max = 2;
    expect(list.insert(max, 0)).to.equal(true);

    expect(list.insert(min, 0)).to.equal(true);

    verifyList();
  });

  it('inserts items invalid position empty list', () => {
    try {
      list.insert(1, 1);
    } catch (error) {
      expect(error.message).to.equal('Index out of bounds');
    }
  });

  it('inserts items invalid position not empty list', () => {
    const item = 1;
    expect(list.insert(item, 0)).to.equal(true);
    try {
      list.insert(item, 2)
    } catch (error) {
      expect(error.message).to.equal('Index out of bounds');
    }
  });

  it('inserts items in the middle of list', () => {
    expect(list.insert(3, 0)).to.equal(true);
    expect(list.insert(1, 0)).to.equal(true);
    expect(list.insert(2, 1)).to.equal(true);
    verifyList();
  });

  it('inserts items at the end of list', () => {
    max = 5;

    for (let i = min; i <= max; i++) {
      expect(list.insert(i , i - 1)).to.equal(true);
    }

    verifyList();
  });

  it('returns index of items', () => {
    let index;

    pushesElements();

    for (let i = min; i <= max; i++) {
      index = list.indexOf(i);
      expect(index).to.equal(i - 1);
    }

    expect(list.indexOf(max + 2)).to.equal(-1);
  });

  it('removes valid items', () => {
    let item;

    pushesElements();

    for (let i = min; i <= max; i++) {
      item = list.remove(i);
      expect(item).to.not.be.an('undefined');
      expect(item).to.equal(i);
    }
  });

  it('removes invalid items', () => {
    let item;

    pushesElements();

    for (let i = max + 2; i <= max + 4; i++) {
      item = list.remove(i);
      expect(item).to.be.an('undefined');
    }
  });

  it('removes item invalid position empty list', () => {
    let item;

    for (let i = min; i <= max; i++) {
      item = list.removeAt(i - 1);
      expect(item).to.be.an('undefined');
    }
  });

  it('removes item invalid position not empty list', () => {
    let item;

    pushesElements();

    for (let i = max + 2; i <= max + 4; i++) {
      item = list.removeAt(i);
      expect(item).to.be.an('undefined');
    }
  });

  it('removes first item list single item', () => {
    const value = 1;
    list.push(value);

    const item = list.removeAt(0);
    expect(item).to.not.be.an('undefined');
    expect(item).to.equal(value);

    expect(list.getHead()).to.be.an('undefined');
    expect(list.isEmpty()).to.equal(true);
  });

  it('removes first item list multiple items', () => {
    pushesElements();

    const item = list.removeAt(0);
    expect(item).to.not.be.an('undefined');
    expect(item).to.equal(min);

    min = 2;
    verifyList();
  });

  it('removes item from middle of list', () => {
    pushesElements(); // 1, 2, 3

    const item = list.removeAt(1); // item 2
    expect(item).to.not.be.an('undefined');
    expect(item).to.equal(2);

    // list needs to be [1, 3]
    let current = list.getHead();

    // item 1
    expect(current).to.not.be.an('undefined');
    if (current) {
      expect(current.item).to.not.be.an('undefined');
      expect(current.item).to.equal(1);
      expect(current.next).to.not.be.an('undefined');
      if (current.next) {
        expect(current.next.item).to.equal(3);
        current = current.next;
      }
    }

    // item 3
    expect(current).to.not.be.an('undefined');
    if (current) {
      expect(current.item).to.not.be.an('undefined');
      expect(current.item).to.equal(3);
      expect(current.next).to.be.an('undefined');
    }
  });

  it('removes item from end of list', () => {
    let item;

    pushesElements();

    const maxIndex = max;
    for (let i = maxIndex; i >= min; i--) {
      item = list.removeAt(i - 1);
      expect(item).to.not.be.an('undefined');
      expect(item).to.equal(i);
      max--;
      verifyList();
    }
  });

  it('returns the head of the list', () => {
    expect(list.getHead()).to.be.an('undefined');

    list.push(1);
    expect(list.getHead()).to.not.be.an('undefined');
  });

  it('returns the correct size', () => {
    expect(list.size()).to.equal(0);

    for (let i = min; i <= max; i++) {
      list.push(i);
      expect(list.size()).to.equal(i);
    }

    const size = max;
    for (let i = min; i <= max; i++) {
      list.remove(i);
      expect(list.size()).to.equal(size - i);
    }

    expect(list.size()).to.equal(0);
  });

  it('returns if it is empty', () => {
    expect(list.isEmpty()).to.equal(true);
    for (let i = min; i <= max; i++) {
      list.push(i);
      expect(list.isEmpty()).to.equal(false);
    }

    for (let i = min; i < max; i++) {
      list.remove(i);
      expect(list.isEmpty()).to.equal(false);
    }
    list.remove(max);
    expect(list.isEmpty()).to.equal(true);

    pushesElements();
    expect(list.isEmpty()).to.equal(false);

    list.clear();
    expect(list.isEmpty()).to.equal(true);
  });

  it('clears the list', () => {
    expect(list.size()).to.equal(0);
    list.clear();
    expect(list.size()).to.equal(0);
    pushesElements();
    expect(list.size()).to.greaterThan(0);
    list.clear();
    expect(list.size()).to.equal(0);
  });

  it('returns toString primitive types', () => {
    expect(list.toString()).to.equal('');

    list.push(1);
    expect(list.toString()).to.equal('1');

    list.push(2);
    expect(list.toString()).to.equal('1,2');

    list.clear();
    expect(list.toString()).to.equal('');
  });

  it('returns toString primitive types: string', () => {
    const ds = new LinkedList<string>();
    ds.push('el1');
    expect(ds.toString()).to.equal('el1');

    ds.push('el2');
    expect(ds.toString()).to.equal('el1,el2');
  });

  it('returns toString objects', () => {
    const ds = new LinkedList<TestObj>();
    expect(ds.toString()).to.equal('');

    ds.push(new TestObj(1, 2));
    expect(ds.toString()).to.equal('1|2');

    ds.push(new TestObj(3, 4));
    expect(ds.toString()).to.equal('1|2,3|4');
  });
})
