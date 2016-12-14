"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BinaryTreeNode_1 = require("../src/BinaryTreeNode");
var BinaryTreeAlgorithm_1 = require("../src/BinaryTreeAlgorithm");
var tsUnit = require("../node_modules/tsunit.external/tsUnit");
var root = new BinaryTreeNode_1.BinaryTreeNode(1, new BinaryTreeNode_1.BinaryTreeNode(2, new BinaryTreeNode_1.BinaryTreeNode(4, new BinaryTreeNode_1.BinaryTreeNode(8), new BinaryTreeNode_1.BinaryTreeNode(9)), new BinaryTreeNode_1.BinaryTreeNode(5, new BinaryTreeNode_1.BinaryTreeNode(10), new BinaryTreeNode_1.BinaryTreeNode(11))), new BinaryTreeNode_1.BinaryTreeNode(3, new BinaryTreeNode_1.BinaryTreeNode(6), new BinaryTreeNode_1.BinaryTreeNode(7)));
var BinaryTreeAlgorithmTest = (function (_super) {
    __extends(BinaryTreeAlgorithmTest, _super);
    function BinaryTreeAlgorithmTest() {
        _super.apply(this, arguments);
        this.comparator = function (left, right) {
            if (left > right)
                return 1;
            else if (left === right)
                return 0;
            else
                return -1;
        };
    }
    BinaryTreeAlgorithmTest.prototype.findMaxRecursive_Success = function () {
        var result = BinaryTreeAlgorithm_1.FindMaxRecursive(root, this.comparator);
        this.areIdentical(11, result);
    };
    BinaryTreeAlgorithmTest.prototype.findMaxIterative_Success = function () {
        var result = BinaryTreeAlgorithm_1.FindMaxIterative(root, this.comparator);
        this.areIdentical(11, result);
    };
    BinaryTreeAlgorithmTest.prototype.findMaxUsingLevelOrder_Success = function () {
        var result = BinaryTreeAlgorithm_1.FindMaxUsingLevelOrder(root, this.comparator);
        this.areIdentical(11, result);
    };
    BinaryTreeAlgorithmTest.prototype.findRecursive_Success = function () {
        var result = BinaryTreeAlgorithm_1.FindRecursive(root, 5, this.comparator);
        this.areNotIdentical(null, result);
        this.areIdentical(5, result.data);
    };
    BinaryTreeAlgorithmTest.prototype.findRecursive_NotFound_Success = function () {
        var result = BinaryTreeAlgorithm_1.FindRecursive(root, 100, this.comparator);
        this.areIdentical(null, result);
    };
    BinaryTreeAlgorithmTest.prototype.findUsingLevelOrder_Success = function () {
        var result = BinaryTreeAlgorithm_1.FindUsingLevelOrder(root, 10, this.comparator);
        this.areNotIdentical(null, result);
        this.areIdentical(10, result.data);
    };
    BinaryTreeAlgorithmTest.prototype.findUsingLevelOrder_NotFound_Success = function () {
        var result = BinaryTreeAlgorithm_1.FindUsingLevelOrder(root, 100, this.comparator);
        this.areIdentical(null, result);
    };
    return BinaryTreeAlgorithmTest;
}(tsUnit.TestClass));
exports.BinaryTreeAlgorithmTest = BinaryTreeAlgorithmTest;
//# sourceMappingURL=BinaryTreeAlgorithmTest.js.map