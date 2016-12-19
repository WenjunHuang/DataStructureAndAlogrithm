import * as tsUnit from "../node_modules/tsunit.external/tsUnit";
import {
    BinaryTreeNode, ITraverser,
    InorderTraversalRecursive,
    InorderTraversalIterative,
    PostorderTraversalRecursive,
    PostorderTraversalIterative,
    LevelOrderTraversal,
    LevelOrderTraversalInReverse
    } from "../src/BinaryTreeNode";

let root = new BinaryTreeNode<number>(1,
    new BinaryTreeNode<number>(2,
        new BinaryTreeNode<number>(4,
            new BinaryTreeNode<number>(8),
            new BinaryTreeNode<number>(9)),
        new BinaryTreeNode<number>(5,
            new BinaryTreeNode<number>(10),
            new BinaryTreeNode<number>(11))),
    new BinaryTreeNode<number>(3,
        new BinaryTreeNode<number>(6),
        new BinaryTreeNode<number>(7)));

const InorderTraversalResults = [8, 4, 9, 2, 10, 5, 11, 1, 6, 3, 7];
const PostorderTraversalResults = [8, 9, 4, 10, 11, 5, 2, 6, 7, 3, 1];
const LevelorderTraversalResults = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const LevelorderTraversalInReverseResults = [8, 9, 10, 11, 4, 5, 6, 7, 2, 3, 1];


export class TreeTraversalTest extends tsUnit.TestClass {
    inorderTraversalRecursive_Success() {
        const queue = [];
        const traverser = (data: number): void => { queue.push(data); };
        InorderTraversalRecursive(root, traverser);

        this.areCollectionsIdentical(InorderTraversalResults, queue);
    }

    inorderTraversalIterative_Success() {

        const queue = [];
        const traverser = (data: number): void => { queue.push(data); };
        InorderTraversalIterative(root, traverser);

        this.areCollectionsIdentical(InorderTraversalResults, queue);
    }
    postorderTraversalRecursive_Success() {
        const queue = [];
        const traverser = (data: number) => { queue.push(data); };

        PostorderTraversalRecursive(root, traverser);
        this.areCollectionsIdentical(PostorderTraversalResults, queue);
    }

    postorderTraversalIterative_Success() {
        const queue = [];
        const traverser = (data: number) => { queue.push(data); }

        PostorderTraversalIterative(root, traverser);
        this.areCollectionsIdentical(PostorderTraversalResults, queue);
    }

    levelorderTraversal_Success() {
        const queue = [];
        const traverser = (data: number) => { queue.push(data); };

        LevelOrderTraversal(root, traverser);
        this.areCollectionsIdentical(LevelorderTraversalResults, queue);
    }

    levelOrderTraversalInReverse_Succes() {
        const queue = [];
        const traverser = (data: number) => { queue.push(data); }

        LevelOrderTraversalInReverse(root, traverser);
        this.areCollectionsIdentical(LevelorderTraversalInReverseResults, queue);
    }
}