const Linkedlist = require('./lib/LinkedList');
const ll = new Linkedlist();
 ll.append(1);
ll.append(2); 
ll.append(3);

ll.insertBefore(2,5)
ll.insertAfter(2,5) 
//console.log(ll.print());

//ll.printNthFromLast(-2)
ll.printNthFromLast(4)  

 ll.printNthFromLast(0)
ll.printNthFromLast(6)  

//console.log(ll.print());

//ll.print()