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

  //In progress - it is not easy as it appears
  removeNode(value) {
    if (this.root === null) return null;
    let current = this.root,
      parentNode = null;

    // *******to find node and its parent node*****//
    while (current) {
      if (value < current.value) {
        parentNode = current;
        current = current.left;
      } else if (value > current.value) {
        parentNode = current;
        current = current.right;
      } else {
        break;
      }
    }
    console.log("node to remove", current);
    console.log("parent node", parentNode);
    //*************find node *********************//

    //handling root node deletion. for root node, parent node will be null
    if (parentNode === null) {
      if (current.left !== null) {
        let temp = this.root;
        this.root = current.left;
        this.root.right = current.left.right ? current.left.right : temp.right;
      }
    }

    //handling deletion of a leaf node
    if (current.left === null && current.right === null) {
      if (parentNode.left && parentNode.left.value === current.value) {
        parentNode.left = null;
      } else if (parentNode.right && parentNode.right.value === current.value) {
        parentNode.right = null;
      }
    }

    //handleing deletion of a node having only one child
    if (current.left !== null && current.right === null) {
      parentNode.left = current.left;
    } else if (current.right !== null && current.left === null) {
      parentNode.right = current.right;
    }

    console.log(this.root);
  }
  findClosestValueInBst(target) {
    let closest = +Infinity,
      current = this.root;
    while (current) {
      if (current.value === target) return current.value;
      if (current.value < Math.abs(target - current.value)) {
      }
    }
  }
}

const bstree = new bst();
bstree.insert(10);
bstree.insert(6);
bstree.insert(15);
bstree.insert(3);
bstree.insert(8);
bstree.insert(20);

bstree.removeNode(10);
