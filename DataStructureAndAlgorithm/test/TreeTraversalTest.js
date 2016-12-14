"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit = require("../node_modules/tsunit.external/tsUnit");
var BinaryTreeNode_1 = require("../src/BinaryTreeNode");
var root = new BinaryTreeNode_1.BinaryTreeNode(1, new BinaryTreeNode_1.BinaryTreeNode(2, new BinaryTreeNode_1.BinaryTreeNode(4, new BinaryTreeNode_1.BinaryTreeNode(8), new BinaryTreeNode_1.BinaryTreeNode(9)), new BinaryTreeNode_1.BinaryTreeNode(5, new BinaryTreeNode_1.BinaryTreeNode(10), new BinaryTreeNode_1.BinaryTreeNode(11))), new BinaryTreeNode_1.BinaryTreeNode(3, new BinaryTreeNode_1.BinaryTreeNode(6), new BinaryTreeNode_1.BinaryTreeNode(7)));
var InorderTraversalResults = [8, 4, 9, 2, 10, 5, 11, 1, 6, 3, 7];
var PostorderTraversalResults = [8, 9, 4, 10, 11, 5, 2, 6, 7, 3, 1];
var LevelorderTraversalResults = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var LevelorderTraversalInReverseResults = [8, 9, 10, 11, 4, 5, 6, 7, 2, 3, 1];
var TreeTraversalTest = (function (_super) {
    __extends(TreeTraversalTest, _super);
    function TreeTraversalTest() {
        return _super.apply(this, arguments) || this;
    }
    TreeTraversalTest.prototype.inorderTraversalRecursive_Success = function () {
        var queue = [];
        var traverser = function (data) { queue.push(data); };
        BinaryTreeNode_1.InorderTraversalRecursive(root, traverser);
        this.areCollectionsIdentical(InorderTraversalResults, queue);
    };
    TreeTraversalTest.prototype.inorderTraversalIterative_Success = function () {
        var queue = [];
        var traverser = function (data) { queue.push(data); };
        BinaryTreeNode_1.InorderTraversalIterative(root, traverser);
        this.areCollectionsIdentical(InorderTraversalResults, queue);
    };
    TreeTraversalTest.prototype.postorderTraversalRecursive_Success = function () {
        var queue = [];
        var traverser = function (data) { queue.push(data); };
        BinaryTreeNode_1.PostorderTraversalRecursive(root, traverser);
        this.areCollectionsIdentical(PostorderTraversalResults, queue);
    };
    TreeTraversalTest.prototype.postorderTraversalIterative_Success = function () {
        var queue = [];
        var traverser = function (data) { queue.push(data); };
        BinaryTreeNode_1.PostorderTraversalIterative(root, traverser);
        this.areCollectionsIdentical(PostorderTraversalResults, queue);
    };
    TreeTraversalTest.prototype.levelorderTraversal_Success = function () {
        var queue = [];
        var traverser = function (data) { queue.push(data); };
        BinaryTreeNode_1.LevelOrderTraversal(root, traverser);
        this.areCollectionsIdentical(LevelorderTraversalResults, queue);
    };
    TreeTraversalTest.prototype.levelOrderTraversalInReverse_Succes = function () {
        var queue = [];
        var traverser = function (data) { queue.push(data); };
        BinaryTreeNode_1.LevelOrderTraversalInReverse(root, traverser);
        this.areCollectionsIdentical(LevelorderTraversalInReverseResults, queue);
    };
    return TreeTraversalTest;
}(tsUnit.TestClass));
exports.TreeTraversalTest = TreeTraversalTest;
//# sourceMappingURL=TreeTraversalTest.js.map