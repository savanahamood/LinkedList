const Node = require('./node')
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
        return this;
    }
    zipLL(l1, l2) {
        if (!l1.head) {
            return l2;
        }
        if (!l2.head) {
            return l1;
        }
    
        let current1 = l1.head;
        let current2 = l2.head;
        let temp1, temp2;
    
        while (current1 && current2) {
            temp1 = current1.next;
            temp2 = current2.next;
    
            current1.next = current2;
            current2.next = temp1;
    
            current1 = temp1;
            current2 = temp2;
        }
    
        this.head = l1.head;

        return this;    
     }

   /*  zipLL(l1, l2) {
        if (!l1.head) {
            return l2;
        }
        if (!l2.head) {
            return l1;
        }
    
        let l3 = new LinkedList();
        let current1 = l1.head;
        let current2 = l2.head;
        let current3 = null;
    
        while (current1 && current2) {
            if (current3) {
                current3.next = new Node(current1.value);
                current3 = current3.next;
                current3.next = new Node(current2.value);
                current3 = current3.next;
            } else {
                l3.head = new Node(current1.value);
                current3 = l3.head;
                current3.next = new Node(current2.value);
                current3 = current3.next;
            }
    
            current1 = current1.next;
            current2 = current2.next;
        }
    
        if (current1) {
            current3.next = current1;
        }
        if (current2) {
            current3.next = current2;
        }
    
        this.head = l3.head; 

        return this;    
     } */

    //  reverseLinkedList(head) {
    //     let nextNode = null;
    //     let previousNode = null;
    //     while (head) {
    //       nextNode = head.next;
    //       head.next = previousNode;
    //       previousNode = head;
    //       head = nextNode;
    //     }
    //     return previousNode;
    //   }


     isPalindrome() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }

        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            if (arr[left] !== arr[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
    print() {
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
module.exports = LinkedList;