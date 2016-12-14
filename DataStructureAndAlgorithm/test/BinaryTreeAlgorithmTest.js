"use strict";
const BinaryTreeNode_1 = require("../src/BinaryTreeNode");
const BinaryTreeAlgorithm_1 = require("../src/BinaryTreeAlgorithm");
const tsUnit = require("../node_modules/tsunit.external/tsUnit");
let root = new BinaryTreeNode_1.BinaryTreeNode(1, new BinaryTreeNode_1.BinaryTreeNode(2, new BinaryTreeNode_1.BinaryTreeNode(4, new BinaryTreeNode_1.BinaryTreeNode(8), new BinaryTreeNode_1.BinaryTreeNode(9)), new BinaryTreeNode_1.BinaryTreeNode(5, new BinaryTreeNode_1.BinaryTreeNode(10), new BinaryTreeNode_1.BinaryTreeNode(11))), new BinaryTreeNode_1.BinaryTreeNode(3, new BinaryTreeNode_1.BinaryTreeNode(6), new BinaryTreeNode_1.BinaryTreeNode(7)));
class BinaryTreeAlgorithmTest extends tsUnit.TestClass {
    constructor(...args) {
        super(...args);
        this.comparator = (left, right) => {
            if (left > right)
                return 1;
            else if (left === right)
                return 0;
            else
                return -1;
        };
    }
    findMaxRecursive_Success() {
        let result = BinaryTreeAlgorithm_1.FindMaxRecursive(root, this.comparator);
        this.areIdentical(11, result);
    }
    findMaxIterative_Success() {
        let result = BinaryTreeAlgorithm_1.FindMaxIterative(root, this.comparator);
        this.areIdentical(11, result);
    }
    findMaxUsingLevelOrder_Success() {
        let result = BinaryTreeAlgorithm_1.FindMaxUsingLevelOrder(root, this.comparator);
        this.areIdentical(11, result);
    }
    findRecursive_Success() {
        let result = BinaryTreeAlgorithm_1.FindRecursive(root, 5, this.comparator);
        this.areNotIdentical(null, result);
        this.areIdentical(5, result.data);
    }
    findRecursive_NotFound_Success() {
        let result = BinaryTreeAlgorithm_1.FindRecursive(root, 100, this.comparator);
        this.areIdentical(null, result);
    }
    findUsingLevelOrder_Success() {
        let result = BinaryTreeAlgorithm_1.FindUsingLevelOrder(root, 10, this.comparator);
        this.areNotIdentical(null, result);
        this.areIdentical(10, result.data);
    }
    findUsingLevelOrder_NotFound_Success() {
        let result = BinaryTreeAlgorithm_1.FindUsingLevelOrder(root, 100, this.comparator);
        this.areIdentical(null, result);
    }
    findSizeRecursive_Success() {
        let result = BinaryTreeAlgorithm_1.FindSizeRecursive(root);
        this.areIdentical(11, result);
    }
    findSizeIterative_Success() {
        let result = BinaryTreeAlgorithm_1.FindSizeIterative(root);
        this.areIdentical(11, result);
    }
}
exports.BinaryTreeAlgorithmTest = BinaryTreeAlgorithmTest;
//# sourceMappingURL=BinaryTreeAlgorithmTest.js.map