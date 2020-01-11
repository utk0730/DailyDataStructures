class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class bst {
  constructor() {
    this.root = null;
  }
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
}

const bstree = new bst();
bstree.insert(10);
bstree.insert(6);
bstree.insert(15);
bstree.insert(3);
bstree.insert(8);
bstree.insert(20);
console.log(bstree);
