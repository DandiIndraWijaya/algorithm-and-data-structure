class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }

  insert(data) {
    const newNode = new Node(data);

    if(this.root === null) {
      this.root = newNode
    }

    else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if(newNode.data < node.data) {

      if(node.left === null) {
        node.left = newNode
      }
      
      else {
        this.insertNode(node.left, newNode)
      }
    }

    else if(newNode.data > node.data) {

      if(node.right === null) {
        node.right = newNode;
      }

      else {
        this.insertNode(node.right, newNode)
      }
    }

  }

  getRootNode() {
    return this.root;
  }
}

const BTS = new BinarySearchTree()
BTS.insert(9)
BTS.insert(4)
BTS.insert(10)
BTS.insert(3)
BTS.insert(5)

console.log(BTS.getRootNode())

