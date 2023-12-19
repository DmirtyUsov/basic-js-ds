const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
    this.count = 0;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    
    const put = (currentNode, newNode) => {
      if(newNode.data < currentNode.data) { // to left
        if(currentNode.left) {
          put(currentNode.left, newNode) // look again
        } else {
          currentNode.left = newNode;
        }
      } else if(newNode.data > currentNode.data){ //to right
        if(currentNode.right) {
          put(currentNode.right, newNode) // look again
        } else {
          currentNode.right = newNode;
        }
    }
  }

  if(this.rootNode)
  {
    put(this.rootNode, newNode);
  } else {
    this.rootNode = newNode;
  }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let toInspect = this.rootNode;
    while(toInspect){
      if(data === toInspect.data){
        return toInspect;
      }
      if(data < toInspect.data){
        toInspect = toInspect.left;
      } else {
        toInspect = toInspect.right;
      }
    }
    return null;
  }

  remove(data) {
    const deleteNode = (root, data) => {
      if(root === null) {
        return null;
      }
      if(data < root.data) {
        root.left = deleteNode(root.left, data);
      } else if(data > root.data) {
        root.right = deleteNode(root.right, data);
      } else { //found
        if(!root.left && !root.right) { //no children
          return null;
        }
        if(!root.left) {
          return root.right;
        } else if(!root.right) {
          return root.left;
        } else { // two children
          root.data = this.min(root.right);
          root.right = deleteNode(root.right, root.data);
        }
      }
      return root;
    }

    this.rootNode = deleteNode(this.rootNode, data);
  }

  min(node=this.rootNode) {
    let toInspect = node;
    while(toInspect.left) {
      toInspect = toInspect.left;
    }
    return toInspect.data;
  }

  max(node = this.rootNode) {
    let toInspect = node;
    while(toInspect.right) {
      toInspect = toInspect.right;
    }
    return toInspect.data;
  }
}

module.exports = {
  BinarySearchTree
};