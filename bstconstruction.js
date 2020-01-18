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

  //helper function to find minimum value in right subtree of a node
  findMinNodeinRightSubTree(node) {
    while (node) {
      node = node.left;
    }
    return node;
  }
  //helper function to find max value in left subtree
  findMaxNodeinRightSubTree(node) {
    while (node) {
      node = node.right;
    }
    return node;
  }

  //       10
  //     /   \
  //    6     15
  //   / \    / \
  //  3  8   14  16
  //    / \      / \
  //   7  9     17  18

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

    //case 1 : handling root node deletion. for root node, parent node will be null
    if (parentNode === null) {
      //todo
    }

    //case 2 : handling deletion of a node, which has both left and right child
    if (current.left !== null && current.right !== null) {
      console.log(this.findMinNodeinRightSubTree);
      const sNode = findMinNodeinRightSubTree(current.right);
      console.log(sNode);
      return;
    }

    //case 3 : handling deletion of a leaf node
    if (current.left === null && current.right === null) {
      if (parentNode.left.value === current.value) {
        parentNode.left = null;
      } else if (parentNode.right.value === current.value) {
        parentNode.right = null;
      }
    }
    // case 4: handleing deletion of a node having only one child
    if (current.left !== null) {
      parentNode.left = current.left;
      current.left = null;
    } else if (current.right !== null) {
      parentNode.right = current.right;
      current.right = null;
    }

    console.log(this.root);
  }

  // finding closest value in BST
  findClosestValueInBst(targetSum) {
    let closest = +Infinity,
      current = this.root;
    if (!current) return null;
    while (current) {
      if (current.value === targetSum) return current.value;
      if (Math.abs(current.value - targetSum) < Math.abs(closest - targetSum)) {
        closest = current.value;
      }
      if (current.value < closest) {
        current = current.right;
      } else {
        current = current.right;
      }
    }
    return closest;
  }

  // find whether it is a valid bst
  //bst helper function
  validateHelper(node, min, max) {
    if (node === null) return true;
    if (node.value < min && node.value > max) return false;
    return (
      this.validateHelper(node.left, min, node.value) &&
      this.validateHelper(node.right, node.value, max)
    );
  }
  //bst main function
  validateBst(node) {
    this.validateHelper(node, -Infinity, +Infinity);
  }
}

const bstree = new bst();
bstree.insert(10);
bstree.insert(6);
bstree.insert(15);
bstree.insert(3);
bstree.insert(8);
bstree.insert(20);

// console.log(bstree.findClosestValueInBst(14));
console.log(bstree.root);
// console.log(bstree.validateBst(bstree.node));
