const LinkedList=require('./linkedlist')
const L1= new LinkedList();


L1.append(1)
L1.append(2)
L1.append(3)
L1.append(3)

L1.append(4)
L1.append(4)
L1.append(5)
L1.append(5)



 console.log(L1.deleteLastOccurrence(5));
console.log(L1.print());

//console.log(L1.print());

// console.log(L1.insertnodesorted(4));
// console.log(L1.insertnodesorted(4));
// console.log(L1.print());
//L1.issorted()
//console.log(L1.issorted());


// const L2 = new LinkedList();
//  L2.append(10)
//  L2.append(20)
// L2.append(30)
// const L3 = new LinkedList();
// L3.head = L3.mergetwolists(L1.head, L2.head);

// console.log(L3.print());
//console.log(L3.mergetwolists(L1,L2));

 //console.log(L3.print());

// const L3 = new LinkedList();
// L3.zipLL(L1, L2);
// //console.log(L1,L2)
// //console.log(L3.print());
// //console.log(L1.print());
// //console.log(L2.print());

// const s = new LinkedList();
// s.append('t');
// s.append('a');
// s.append('c');
// s.append('o');
// s.append('c');
// s.append('a');
// s.append('t');
// console.log(s.print());

// console.log(s.reverseLinkedList(s.head)); 
// console.log(s.print());

// //const isPalindrome = s.isPalindrome();
// //console.log(isPalindrome); 

// const n = new LinkedList();
// n.append('t');
// n.append('a');
// n.append('c');
// n.append('o');
// n.append('c');
// n.append('s');
// n.append('t');
// //reverseLinkedList
// console.log(n.print());

// console.log(n.reverseLinkedList(n.head)); 
// console.log(n.print());

// //const isPalindromen = n.isPalindrome();
// //console.log(isPalindromen); 
// const m = new LinkedList();
// m.append('s');
// m.append('a');
// m.append('v');
// m.append('a');
// m.append('n');
// //m.append('s');
// //m.append('t');
// //reverseLinkedList
// console.log(m.print());

// console.log(m.reverseLinkedList(m.head)); 
// console.log(m.print());