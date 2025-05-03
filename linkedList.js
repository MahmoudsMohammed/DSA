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
    let currentNode = this.head,
      counter = 0;
    while (counter !== index) {
      // shift current node to next node & increment counter
      currentNode = currentNode.next;
      ++counter;
    }
    return currentNode;
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
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(0, 20);
console.log(myLinkedList.printList());
console.log(myLinkedList);
