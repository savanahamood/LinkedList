const Node = require('./node')
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode; // Initialize the tail for an empty list
            return this;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
        this.tail = newNode; // Update the tail to the newly appended node
        return this;
    }

    rotatLL(k) {
        if (!this.head) return null
        let len = 0
        let temp = this.head
        while (temp != null) {
            len++
            temp = temp.next
        }
        let count = len - (k % len)
        this.tail.next = this.head
        while (count > 0) {
            this.head = this.head.next
            this.tail = this.tail.next
            count--
        }
        this.tail.next = null
        return this.head
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


    removeLL(head) {
        if (!this.head && !this.head.next) return null
        let current = this.head
        while (current !== null && current.next !== null) {
            if (current.value === current.next.value) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
        return head
    }

    removemiddle(head) {
        if (!this.head || !this.head.next) return null
        let fast = this.head
        let slow = this.head
        let prev = null
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next
            prev = slow
            slow = slow.next
        }
        if (prev === null) {
            this.head = this.head.next
        } else {
            prev.next = slow.next
        }
        return head
    }

    insertnodesorted(value) {
const newnode= new Node(value)
if (!this.head){
    this.head=newnode;
    return
}
if(value<=this.head.value){
    newnode.next=this.head
    this.head=newnode
    return
}
if (value >= this.tail.value) {
    this.tail.next = newnode;
    this.tail = newnode;
    return;
  }

let current=this.head
while(current.next && value>current.next.value){
    current=current.next
}
newnode.next = current.next;
    current.next = newnode;
    return this.head
    }
issorted(head){
    if (!this.head||!this.head.next) return true
    let current=this.head
    while(current.next){
        if (current.value>current.next.value){
            return false
        }else{
            current=current.next
        }
    }
    return true
}
mergetwolists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    const mergedList = new LinkedList();
    let current = mergedList;

    while (l1 && l2) {
      if (l1.value <= l2.value) {
        current.next = new Node(l1.value);
        l1 = l1.next;
      } else {
        current.next = new Node(l2.value);
        l2 = l2.next;
      }
      current = current.next;
    }

    // Append any remaining nodes from l1 or l2 to the merged list
    if (l1) {
      current.next = l1;
    } else {
      current.next = l2;
    }

    // Update the head of the merged list
    mergedList.head = mergedList.next;

    return mergedList.head;
  }


  deleteLastOccurrence(item) {
    if (!this.head) return;

    let current = this.head;
    let lastOccurrence = null;
    let prevLastOccurrence = null;

    while (current) {
      if (current.value === item) {
        lastOccurrence = current;
        prevLastOccurrence = current;
      } else if (current.next && current.next.value === item) {
        prevLastOccurrence = current;
      }
      current = current.next;
    }

    if (!lastOccurrence) return; // Item not found in the list

    // Check if the last occurrence is the head
    if (lastOccurrence === this.head) {
      this.head = this.head.next;
    } else {
      prevLastOccurrence.next = lastOccurrence.next;
    }

    // If the last occurrence is also the tail, update the tail
    if (lastOccurrence === this.tail) {
      this.tail = prevLastOccurrence;
    }
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