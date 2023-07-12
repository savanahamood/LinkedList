'use strict';
const Node = require('./Node');
class Linkedlist {
    constructor() {
        this.head = null;
        // this.tail = null;
        // this.size=
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            //if the linkedlist is empty
            this.head = newNode;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        return this;
    }
    insertBefore(value, newValue){
        const newNode = new Node(newValue);
        if (this.head === null) {
            throw new Error('empty list');
        } else if (this.head.value === value) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
          while (current.next && current.next.value !== value) {
            current = current.next;
        }
          if (current.next=== null) {
            throw new Error('can not find the value');
          }
          newNode.next = current.next;
          current.next = newNode;
        }
      }
    
      
      insertAfter(value, newValue) {
        const newNode = new Node(newValue);
        if (this.head === null) {
            throw new Error('empty list');
        }
        let current = this.head;
        while (current && current.value !== value) {
          current = current.next;
        }
        if (current === null) {
            throw new Error('can not find the value');
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    printNthFromLast(n) {
        let firstPointer = this.head;
        let secondPointer = this.head;
        let count = 0;
        if (n<0) {
            console.log(`${n} is not possitive`);
          }else {
        if (this.head === null) {
            console.log(`empty linked list`);
          }

        if (this.head !== null) {
          while (count <= n) {
            if (secondPointer === null) {
              console.log(`${n} is greater than the number of nodes in the list`);
              return;
            }
            secondPointer = secondPointer.next;
            count++;
          }
          if (secondPointer === null) {
            if (this.head !== null) {
              console.log(`Node no. ${n} from last is ${this.head.value}`);
            }
          } else {
            while (secondPointer !== null) {
              firstPointer = firstPointer.next;
              secondPointer = secondPointer.next;
            }
            console.log(`Node no. ${n} from last is ${firstPointer.value}`);
          }
        }
      }}

    print(){
        let currentNode = this.head;
        let result = '';
        while (currentNode) {
          result += `{ ${currentNode.value} } -> `;
          currentNode = currentNode.next;
        }
        result += 'NULL';
        return result;
        }
}

module.exports = Linkedlist;