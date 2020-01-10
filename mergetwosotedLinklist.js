// Write a function that takes in the heads of two Singly Linked Lists that are in sorted order,
// respectively (assume that the lists have at least 1 node; in other words, the heads will never be null
// values). The function should merge the lists and return the head of the merged list; the merged list
// should be in sorted order. Note that every node in the Singly Linked Lists has a "value" property
// storing its value as well as a "next" property pointing to the next node in the list or None (null) if it is
// the tail of the list.

// Sample input:
// 2 -> 6 -> 7 -> 8 (the head node with value 2)
// 1 -> 3 -> 4 -> 5 -> 9 -> 10 (the head node with value 1)

// Sample output :
//1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 (the head node with value 1)

class newnode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linklist {
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
  merge(ll1, ll2) {
    let prev = null,
      p1 = ll1.head,
      p2 = ll2.head;
    while (p1 && p2) {
      if (p1.value < p2.value) {
        prev = p1;
        p1 = p1.next;
      } else {
        if (prev !== null) {
          prev.next = p2;
        }
        prev = p2;
        p2 = p2.next;
        prev.next = p1;
      }
    }
    if (p1 === null) {
      prev.next = p2;
    }
    return ll1.head.value < ll2.head.value ? ll1 : ll2;
  }
}
let ll1 = new linklist();
ll1.push(15);
ll1.push(20);
ll1.push(60);
ll1.push(70);
ll1.push(80);

let ll2 = new linklist();
ll2.push(10);
ll2.push(30);
ll2.push(40);
ll2.push(50);
ll2.push(90);

let lmerge = new linklist();

console.log(lmerge.merge(ll1, ll2));
