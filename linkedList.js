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
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const node = {
      value,
      next: null,
    };
    this.tail.next = node;
    this.tail = node;
    this.length += 1;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList);
