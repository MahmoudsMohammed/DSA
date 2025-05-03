// // Create the below linked list:
// // myLinkedList = {
// //   head: {
// //     value: 10
// //     next: {
// //       value: 5
// //       next: {
// //         value: 16
// //         next: null
// //       }
// //     }
// //   }
// // };

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
console.log(myLinkedList);
