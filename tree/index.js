 const  BinaryTree= require('./tree');

 const Node = require('./node');

// let tree = null;

// let one = new Node(1);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);
// let seven = new Node(7);
// let eight = new Node(8);
// let nine = new Node(9);

// one.left = two;
// one.right = three;
// two.left = six;
// three.left = four;
// three.right = five;
// six.right = seven;
// seven.left = eight;
// seven.right = nine;

// tree = new BinaryTree(one);

// let preOrder = tree.preOrder();
// let inOrder = tree.inOrder();
// let postOrder = tree.postOrder();


// console.log('preOrder: ', preOrder);
// console.log('inOrder: ', inOrder);
// console.log('postOrder: ', postOrder);


// const maximumValue = tree.findMaximumValue();
// console.log('Maximum value:', maximumValue);

const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);

// Create root nodes for the second tree
const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);
root2.left.right = new Node(5);

// Create instances of BinaryTree with the respective root nodes
const tree1 = new BinaryTree(root1);
const tree2 = new BinaryTree(root2);

// Call the compareTrees method on tree1 and pass tree2 as an argument
const result = tree1.compareTrees(tree1.root, tree2.root);

// Print the result to the console
console.log(result); // Output: true, as both trees are identical