class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      const newNode = new Node(value),
        prev = this.traverseToIndex(index - 1);
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
    }
  }

  traverseToIndex(index) {
    if (index >= this.length) {
      console.log('Needed Item Out of The Range');
    } else {
      let currentNode = this.head,
        counter = 0;
      while (counter !== index) {
        // shift current node to next node & increment counter
        currentNode = currentNode.next;
        ++counter;
      }
      return currentNode;
    }
  }

  printList() {
    const values = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }

  lookup(index) {
    const node = this.traverseToIndex(index);
    return node ? node.value : 'Try Again ;)';
  }

  remove(index) {
    const prev = this.traverseToIndex(index - 1);
    const rNode = prev.next;
    prev.next = rNode.next;
    this.length--;
    return rNode.value;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let current = this.head;
    this.tail = this.head;
    let nextNode = current.next;

    while (nextNode) {
      const temp = nextNode.next;
      nextNode.next = current; // Swap pointer
      current = nextNode; // Shift
      nextNode = temp; // Shift
    }

    this.head.next = null; // Make the tail and head next is null
    this.head = current; // Point head to first node
    console.log(this);
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 20);
myLinkedList.reverse();
console.log(myLinkedList.printList());
// console.log(myLinkedList.printList());
// console.log(myLinkedList.remove(3));
// console.log(myLinkedList.printList());
// console.log(myLinkedList.lookup(myLinkedList.length - 1));
// console.log(myLinkedList);

// Doubly Linked List

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new DoublyNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const node = new DoublyNode(value);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.length++;
  }
  prepend(value) {
    const newNode = new DoublyNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      const newNode = new DoublyNode(value),
        prev = this.traverseToIndex(index - 1),
        targetNode = prev.next;
      newNode.next = targetNode;
      targetNode.prev = newNode;
      newNode.prev = prev;
      prev.next = newNode;
      this.length++;
    }
  }

  traverseToIndex(index) {
    if (index >= this.length) {
      console.log('Needed Item Out of The Range');
    } else {
      let currentNode = this.head,
        counter = 0;
      while (counter !== index) {
        // shift current node to next node & increment counter
        currentNode = currentNode.next;
        ++counter;
      }
      return currentNode;
    }
  }

  printList() {
    const values = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }

  lookup(index) {
    const node = this.traverseToIndex(index);
    return node ? node.value : 'Try Again ;)';
  }

  remove(index) {
    const prev = this.traverseToIndex(index - 1);
    const rNode = prev.next;
    prev.next = rNode.next;
    rNode.next.prev = prev;
    this.length--;
    return rNode.value;
  }
}

// let myDoublyLinkedList = new DoublyLinkedList(10);
// myDoublyLinkedList.append(5);
// myDoublyLinkedList.append(16);
// myDoublyLinkedList.prepend(1);
// myDoublyLinkedList.insert(2, 20);
// console.log(myDoublyLinkedList.printList());
// console.log(myDoublyLinkedList.remove(3));
// console.log(myDoublyLinkedList.printList());
// console.log(myDoublyLinkedList.lookup(myDoublyLinkedList.length - 1));
// console.log(myDoublyLinkedList);
