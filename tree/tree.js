'use strict';
const Node = require('./node');

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    findMaximumValue() {
        if (!this.root) {
            throw new Error("Binary Tree is empty.");
        }

        let max = this.root.value;

        const traverse = (node) => {
            if (node.value > max) {
                max = node.value;
            }
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        };

        traverse(this.root);

        return max;
    }



    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    inOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    postOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }

    compareTrees(tree1, tree2) {
        if (!tree1 || !tree2) {
          return false; // One of the trees is empty, considered not equal
        }
    
        let counter1 = 0;
        let counter2 = 0;
    
        function traverse1(node) {
          if (!node) return;
          if (node.value && node.value.includes('.')) counter1++;
          if (node.left) traverse1(node.left);
          if (node.right) traverse1(node.right);
        }
    
        function traverse2(node) {
          if (!node) return;
          if (node.value && node.value.includes('.')) counter2++;
          if (node.left) traverse2(node.left);
          if (node.right) traverse2(node.right);
        }
    
        traverse1(tree1.root);
        traverse2(tree2.root);
    
        return counter1 === counter2;
      
    // if (!tree1 && !tree2) {
    //     return true; // Both trees are empty, considered equal
    //   }
    
    //   if (!tree1 || !tree2) {
    //     return false; // One of the trees is empty, considered not equal
    //   }
    
    //   if (tree1.value !== tree2.value) {
    //     return false; // Node values are different, considered not equal
    //   }
    
    //   // Recursively compare the left and right subtrees
    //   const leftSubtreeEqual = compareTrees(tree1.left, tree2.left);
    //   const rightSubtreeEqual = compareTrees(tree1.right, tree2.right);
    
    //   // Return true only if both left and right subtrees are equal
    //   return leftSubtreeEqual && rightSubtreeEqual;
}
}






module.exports = BinaryTree