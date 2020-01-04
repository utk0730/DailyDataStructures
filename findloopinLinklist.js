// Write a function that takes in the head of a Singly Linked List that contains a loop (in other words,
// the list's tail node points to some node in the list instead of the None (null) value). The function
// should return the node (the actual node - not just its value) from which the loop originates in
// constant space. Note that every node in the Singly Linked List has a "value" property storing its
// value as well as a "next" property pointing to the next node in the list.

// Sample input: n1 -> n2 -> n3 -> n4 -> n5 -> n6
//                                  ^           v
//                                  n9 <- n8 <- n7
// Sample output: n4

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

  // to construct link list
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
  // to add a cycle in linklist at a specific node
  makeCycleAtNode(n) {
    let tailNode = this.head,
      cycleNode = this.head,
      i = 1;
    while (tailNode.next !== null) {
      tailNode = tailNode.next;
    }
    while (i < n) {
      cycleNode = cycleNode.next;
      i++;
    }
    tailNode.next = cycleNode;
  }
  findLoop() {
    let first = this.head.next,
      second = this.head.next.next;
    while (first !== second) {
      first = first.next;
      second = second.next.next;
    }
    first = this.head;
    while (first !== second) {
      first = first.next;
      second = second.next;
    }
    return first;
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

linklist.makeCycleAtNode(9);
console.log(linklist.findLoop());
