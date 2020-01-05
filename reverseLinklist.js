// Write a function that takes in the head of a Singly Linked List (assume that the list has at least 1
//     node; in other words, the head will never be a null value). The function should reverse the list and
//     return its new head. Note that every node in the Singly Linked List has a "value" property storing its
//     value as well as a "next" property pointing to the next node in the list or None (null) if it is the tail of
//     the list.
//     Sample input: 0 -> 1 -> 2 -> 3 -> 4 -> 5 (the head node with value 0)
//     Sample output: 5 -> 4 -> 3 -> 2 -> 1 -> 0 (the new head node with value 5)

class newnode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(value) {
    let node = new newnode(value);
    if (!this.head) {
      this.head = node;
      this.length++;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.length++;
    }
  }
  reverse() {
    let p1 = null,
      p2 = this.head,
      p3;
    while (p2 !== null) {
      p3 = p2.next;
      p2.next = p1;
      p1 = p2;
      p2 = p3;
    }
    return p1;
  }
}
let linklist = new Linklist();
linklist.push(10);
linklist.push(20);
linklist.push(30);
linklist.push(40);
linklist.push(50);
linklist.push(60);
linklist.push(70);
linklist.push(80);
linklist.push(90);

console.log(linklist.reverse());
