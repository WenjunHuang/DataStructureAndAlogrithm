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
var InorderTraversalTests = (function (_super) {
    __extends(InorderTraversalTests, _super);
    function InorderTraversalTests() {
        _super.apply(this, arguments);
    }
    InorderTraversalTests.prototype.inorderTraversalRecursive_Success = function () {
        var queue = [];
        var traverser = function (data) { queue.push(data); };
        BinaryTreeNode_1.InorderTraversalRecursive(root, traverser);
        this.areCollectionsIdentical(InorderTraversalResults, queue);
    };
    InorderTraversalTests.prototype.inorderTraversalIterative_Success = function () {
        var queue = [];
        var traverser = function (data) { queue.push(data); };
        BinaryTreeNode_1.InorderTraversalIterative(root, traverser);
        this.areCollectionsIdentical(InorderTraversalResults, queue);
    };
    return InorderTraversalTests;
}(tsUnit.TestClass));
exports.InorderTraversalTests = InorderTraversalTests;
var PostorderTraversalTests = (function (_super) {
    __extends(PostorderTraversalTests, _super);
    function PostorderTraversalTests() {
        _super.apply(this, arguments);
    }
    PostorderTraversalTests.prototype.postorderTraversalRecursive_Success = function () {
        var queue = [];
        var traverser = function (data) { queue.push(data); };
        BinaryTreeNode_1.PostorderTraversalRecursive(root, traverser);
        this.areCollectionsIdentical(PostorderTraversalResults, queue);
    };
    PostorderTraversalTests.prototype.postorderTraversalIterative_Success = function () {
        var queue = [];
        var traverser = function (data) { queue.push(data); };
        BinaryTreeNode_1.PostorderTraversalIterative(root, traverser);
        this.areCollectionsIdentical(PostorderTraversalResults, queue);
    };
    return PostorderTraversalTests;
}(tsUnit.TestClass));
exports.PostorderTraversalTests = PostorderTraversalTests;
var LevelorderTraversalTests = (function (_super) {
    __extends(LevelorderTraversalTests, _super);
    function LevelorderTraversalTests() {
        _super.apply(this, arguments);
    }
    LevelorderTraversalTests.prototype.levelorderTraversal_Success = function () {
        var queue = [];
        var traverser = function (data) { queue.push(data); };
        BinaryTreeNode_1.LevelOrderTraversal(root, traverser);
        this.areCollectionsIdentical(LevelorderTraversalResults, queue);
    };
    return LevelorderTraversalTests;
}(tsUnit.TestClass));
exports.LevelorderTraversalTests = LevelorderTraversalTests;
//# sourceMappingURL=TreeTraversalTest.js.map