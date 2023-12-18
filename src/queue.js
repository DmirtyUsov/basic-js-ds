const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.head) {
      let prev = this.head;
      while(prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    else {
      this.head = node;

    }
  }

  dequeue() {
    let value;
    if(this.head) {
      value = this.head.value;
      this.head = this.head.next;
    }
    return value;
  }

}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue()
module.exports = {
  Queue
};
