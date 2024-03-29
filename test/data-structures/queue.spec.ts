import 'mocha';
import { expect } from 'chai';
import Queue from '../../src/data-structures/Queue';
import TestObj from './testObject';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it('starts empty', () => {
    expect(queue.size()).to.equal(0);
    expect(queue.isEmpty()).to.equal(true);
  });

  it('enqueues elements', () => {
    queue.enqueue(1);
    expect(queue.size()).to.equal(1);
    queue.enqueue(2);
    expect(queue.size()).to.equal(2);
    queue.enqueue(3);
    expect(queue.size()).to.equal(3);

    expect(queue.isEmpty()).to.equal(false);
  });

  it('dequeue elements', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).to.equal(1);
    expect(queue.dequeue()).to.equal(2);
    expect(queue.dequeue()).to.equal(3);
    expect(queue.dequeue()).to.equal(undefined);
  });

  it('implements FIFO logic', () => {
    queue.enqueue(1);
    expect(queue.peek()).to.equal(1);
    queue.enqueue(2);
    expect(queue.peek()).to.equal(1);
    queue.enqueue(3);
    expect(queue.peek()).to.equal(1);

    expect(queue.dequeue()).to.equal(1);
    expect(queue.dequeue()).to.equal(2);
    expect(queue.dequeue()).to.equal(3);
    expect(queue.dequeue()).to.equal(undefined);
  });

  it('allows to peek at the front element in the queue without dequeuing it', () => {
    expect(queue.peek()).to.equal(undefined);

    queue.enqueue(1);
    expect(queue.peek()).to.equal(1);

    queue.enqueue(2);
    expect(queue.peek()).to.equal(1);

    queue.dequeue();
    expect(queue.peek()).to.equal(2);
  });

  it('returns the correct size', () => {
    expect(queue.size()).to.equal(0);
    queue.enqueue(1);
    expect(queue.size()).to.equal(1);
    queue.enqueue(2);
    expect(queue.size()).to.equal(2);
    queue.enqueue(3);
    expect(queue.size()).to.equal(3);

    queue.clear();
    expect(queue.isEmpty()).to.equal(true);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).to.equal(3);

    queue.dequeue();
    expect(queue.size()).to.equal(2);
    queue.dequeue();
    expect(queue.size()).to.equal(1);
    queue.dequeue();
    expect(queue.size()).to.equal(0);
    queue.dequeue();
    expect(queue.size()).to.equal(0);
  });

  it('returns if it is empty', () => {
    expect(queue.isEmpty()).to.equal(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).to.equal(false);
    queue.enqueue(2);
    expect(queue.isEmpty()).to.equal(false);
    queue.enqueue(3);
    expect(queue.isEmpty()).to.equal(false);

    queue.clear();
    expect(queue.isEmpty()).to.equal(true);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.isEmpty()).to.equal(false);

    queue.dequeue();
    expect(queue.isEmpty()).to.equal(false);
    queue.dequeue();
    expect(queue.isEmpty()).to.equal(false);
    queue.dequeue();
    expect(queue.isEmpty()).to.equal(true);
    queue.dequeue();
    expect(queue.isEmpty()).to.equal(true);
  });

  it('clears the queue', () => {
    queue.clear();
    expect(queue.isEmpty()).to.equal(true);

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).to.equal(false);

    queue.clear();
    expect(queue.isEmpty()).to.equal(true);
  });

  it('returns toString primitive types', () => {
    expect(queue.toString()).to.equal('');

    queue.enqueue(1);
    expect(queue.toString()).to.equal('1');

    queue.enqueue(2);
    expect(queue.toString()).to.equal('1,2');

    queue.clear();
    expect(queue.toString()).to.equal('');

    const queueString = new Queue<string>();
    queueString.enqueue('el1');
    expect(queueString.toString()).to.equal('el1');

    queueString.enqueue('el2');
    expect(queueString.toString()).to.equal('el1,el2');
  });

  it('returns toString objects', () => {
    const queueMyObj = new Queue<TestObj>();
    expect(queueMyObj.toString()).to.equal('');

    queueMyObj.enqueue(new TestObj(1, 2));
    expect(queueMyObj.toString()).to.equal('1|2');

    queueMyObj.enqueue(new TestObj(3, 4));
    expect(queueMyObj.toString()).to.equal('1|2,3|4');
  });
});
