import { BinaryTreeNode } from "../src/BinaryTreeNode";
import { FindMaxRecursive, FindMaxIterative, FindMaxUsingLevelOrder, FindRecursive, FindUsingLevelOrder, FindSizeRecursive, FindSizeIterative } from "../src/BinaryTreeAlgorithm";
import * as tsUnit from "../node_modules/tsunit.external/tsUnit";
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

export class BinaryTreeAlgorithmTest extends tsUnit.TestClass {
    comparator = (left: number, right: number): number => {
        if (left > right) return 1;
        else if (left === right) return 0;
        else return -1;
    }

    findMaxRecursive_Success() {
        let result = FindMaxRecursive(root, this.comparator);
        this.areIdentical(11, result);
    }

    findMaxIterative_Success() {
        let result = FindMaxIterative(root, this.comparator);
        this.areIdentical(11, result);
    }

    findMaxUsingLevelOrder_Success() {

        let result = FindMaxUsingLevelOrder(root, this.comparator);
        this.areIdentical(11, result);
    }

    findRecursive_Success() {
        let result = FindRecursive(root, 5, this.comparator);
        this.areNotIdentical(null, result);
        this.areIdentical(5, result.data);
    }

    findRecursive_NotFound_Success() {
        let result = FindRecursive(root, 100, this.comparator);
        this.areIdentical(null, result);
    }

    findUsingLevelOrder_Success() {
        let result = FindUsingLevelOrder(root, 10, this.comparator);
        this.areNotIdentical(null, result);
        this.areIdentical(10, result.data);
    }

    findUsingLevelOrder_NotFound_Success() {
        let result = FindUsingLevelOrder(root, 100, this.comparator);
        this.areIdentical(null, result);
    }

    findSizeRecursive_Success() {
        let result = FindSizeRecursive(root);
        this.areIdentical(11, result);
    }

    findSizeIterative_Success() {
        let result = FindSizeIterative(root);
        this.areIdentical(11, result);
    }
}

