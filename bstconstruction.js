class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// time complexity  : avaerage time - O(log (n))
//                    worst time - O(n), in case of linear bst
// space complexity : O(1) // if implemented iteratively
//                 : O(n) // if implemented recursively , due to call stack
class bst {
  constructor() {
    this.root = null;
  }
  // this is an iterative approach
  insert(value) {
    const newNode = new node(value);
    let current = this.root;
    if (current === null) {
      this.root = newNode;
    } else {
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
    return this;
  }
  findNode(value) {
    if (this.root === null) return null;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }
}

const bstree = new bst();
bstree.insert(10);
bstree.insert(6);
bstree.insert(15);
bstree.insert(3);
bstree.insert(8);
bstree.insert(20);

console.log(bstree.findNode(200));
