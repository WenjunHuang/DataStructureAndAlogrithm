"use strict";
const tsUnit = require("../node_modules/tsunit.external/tsUnit");
const BinaryTreeNode_1 = require("../src/BinaryTreeNode");
let root = new BinaryTreeNode_1.BinaryTreeNode(1, new BinaryTreeNode_1.BinaryTreeNode(2, new BinaryTreeNode_1.BinaryTreeNode(4, new BinaryTreeNode_1.BinaryTreeNode(8), new BinaryTreeNode_1.BinaryTreeNode(9)), new BinaryTreeNode_1.BinaryTreeNode(5, new BinaryTreeNode_1.BinaryTreeNode(10), new BinaryTreeNode_1.BinaryTreeNode(11))), new BinaryTreeNode_1.BinaryTreeNode(3, new BinaryTreeNode_1.BinaryTreeNode(6), new BinaryTreeNode_1.BinaryTreeNode(7)));
const InorderTraversalResults = [8, 4, 9, 2, 10, 5, 11, 1, 6, 3, 7];
const PostorderTraversalResults = [8, 9, 4, 10, 11, 5, 2, 6, 7, 3, 1];
const LevelorderTraversalResults = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const LevelorderTraversalInReverseResults = [8, 9, 10, 11, 4, 5, 6, 7, 2, 3, 1];
class TreeTraversalTest extends tsUnit.TestClass {
    inorderTraversalRecursive_Success() {
        const queue = [];
        const traverser = (data) => { queue.push(data); };
        BinaryTreeNode_1.InorderTraversalRecursive(root, traverser);
        this.areCollectionsIdentical(InorderTraversalResults, queue);
    }
    inorderTraversalIterative_Success() {
        const queue = [];
        const traverser = (data) => { queue.push(data); };
        BinaryTreeNode_1.InorderTraversalIterative(root, traverser);
        this.areCollectionsIdentical(InorderTraversalResults, queue);
    }
    postorderTraversalRecursive_Success() {
        const queue = [];
        const traverser = (data) => { queue.push(data); };
        BinaryTreeNode_1.PostorderTraversalRecursive(root, traverser);
        this.areCollectionsIdentical(PostorderTraversalResults, queue);
    }
    postorderTraversalIterative_Success() {
        const queue = [];
        const traverser = (data) => { queue.push(data); };
        BinaryTreeNode_1.PostorderTraversalIterative(root, traverser);
        this.areCollectionsIdentical(PostorderTraversalResults, queue);
    }
    levelorderTraversal_Success() {
        const queue = [];
        const traverser = (data) => { queue.push(data); };
        BinaryTreeNode_1.LevelOrderTraversal(root, traverser);
        this.areCollectionsIdentical(LevelorderTraversalResults, queue);
    }
    levelOrderTraversalInReverse_Succes() {
        const queue = [];
        const traverser = (data) => { queue.push(data); };
        BinaryTreeNode_1.LevelOrderTraversalInReverse(root, traverser);
        this.areCollectionsIdentical(LevelorderTraversalInReverseResults, queue);
    }
}
exports.TreeTraversalTest = TreeTraversalTest;
//# sourceMappingURL=TreeTraversalTest.js.map