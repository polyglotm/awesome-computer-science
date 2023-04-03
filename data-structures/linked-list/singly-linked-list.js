class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class SinglyLinkedList {
  constructor(node) {
    this.header = node;
  }
  
  add(node) {
    let currentNode = this.header;
    
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
  
  
}
