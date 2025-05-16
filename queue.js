class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peak() {
    if (this.length === 0) {
      return 'The Queue Is Empty Please Add Any Items';
    } else {
      return this.first;
    }
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    const firstTemp = this.first;
    this.first = this.first.next;
    this.length--;
    if (this.length === 0) {
      this.last = null;
    }
    return firstTemp.value;
  }
  isEmpty() {
    return !!this.length;
  }
}

const myQueue = new Queue();

myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log(myQueue.peak());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue);
