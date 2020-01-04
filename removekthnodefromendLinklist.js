// Remove Kth Node From End
// Write a function that takes in the head of a Singly Linked List and an integer k (assume that the list
// has at least k nodes). The function should remove the kth node from the end of the list. Note that
// every node in the Singly Linked List has a "value" property storing its value as well as a "next"
// property pointing to the next node in the list or None (null) if it is the tail of the list.

// Sample input: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9, 4
// Output : 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9

// time complexity - O(n)
// space complexity - O(1)

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

  //no a part of this problem, implemented to construct a linklist
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

  removeNthNodeFromEnd(num) {
    if (num > this.length || num <= 0) return 'the node is not there in list';
    let first = this.head;
    let second = this.head;
    let current = 1;
    while (current <= num) {
      second = second.next;
      current++;
    }
    if (second === null) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    while (second.next !== null) {
      first = first.next;
      second = second.next;
    }
    let deleteNode = first.next;
    first.next = first.next.next;
    deleteNode.next = null;
    this.length--;

    console.log('deleted node...', deleteNode);
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

console.log(linklist);
linklist.removeNthNodeFromEnd(1);
console.log(linklist);
