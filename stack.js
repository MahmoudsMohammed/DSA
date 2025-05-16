// Stack Is => LIFO

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.top = node;
      this.bottom = this.top;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.length++;
  }

  peak() {
    if (this.length === 0) {
      return 'The Stack Is Empty';
    } else {
      return this.top.value;
    }
  }

  pop() {
    if (this.length === 0) {
      return 'The Stack Is Empty';
    } else {
      const removed = this.top;
      // to reset the bottom if there is only one node
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      this.top = this.top.next;
      this.length--;
      return removed.value;
    }
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');

console.log(myStack.peak());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peak());
console.log(myStack);
// console.log(myStack.peak());
// console.log(myStack.isEmpty());
