class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
 
  insert(value) {
    let newNode = new TreeNode(value);
    let currentNode = this.root;
    while (newNode) {
      if (currentNode) {
        if (currentNode.value >= newNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            newNode = null;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            newNode = null;
          }
        }
      } else {
        this.root = newNode;
        newNode = null;
      }
    }
  }

  lookup(value) {
    let currentNode = this.root,
      target = null;
    while (!target && currentNode) {
      if (currentNode.value === value) {
        target = currentNode;
      } else {
        if (currentNode.value >= value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return target;
  }
}
const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(170));
// console.log(tree.root);
// tree.remove(170);
// console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
