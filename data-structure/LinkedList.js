class Node {
  constructor(prev, next, value) {
    this.prev = prev;
    this.next = next;
    this.value = value;
  }
}

class LinkedList {
  head = null;

  constructor(values) {
    if (values) {
      values.reverse().forEach(value => {
        this.add(value);
      });
    }
  }

  add(value) {
    const node = new Node(null, this.head, value);
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
  }

  remove() {
    if (this.head) {
      if (this.head.next) {
        this.head.next.prev = null;
      }
      this.head = this.head.next;
    }
  }

  getValue(index) {
    let node = this.head;
    for (let i = 0; i < index; i += 1) {
      if (i === index - 1) {
        return node.value;
      }

      if (!node.next) {
        return null;
      }

      node = node.next;
    }
  }

  getValues() {
    const result = [];
    let node = this.head;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  }
}

module.exports = {
  LinkedList
};
